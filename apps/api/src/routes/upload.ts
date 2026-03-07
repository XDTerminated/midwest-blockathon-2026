import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

import { getUser } from "../lib/auth";
import { stripPII } from "../services/anonymize";
import { pinataService } from "../services/pinata";

export const uploadRoutes = new Hono();

const caseUploadSchema = z.object({
  caseType: z.string().min(1),
  countryOfOrigin: z.string().min(1),
  outcome: z.enum(["approved", "denied", "pending", "appealed", "withdrawn", "remanded"]),
  year: z.string().regex(/^\d{4}$/),
  court: z.string().optional(),
  narrative: z.string().min(50).max(5000),
  documentsUsed: z.array(z.string()).min(1),
  keyFactors: z.string().min(20).max(1000),
  lessonsLearned: z.string().min(20).max(1000),
  timelineMonths: z.coerce.number().min(1).max(240),
  lawyerUsed: z.boolean(),
  formsUsed: z.array(z.string()),
  interviewDetails: z.string().optional(),
  rfesReceived: z.string().optional(),
  denialReasons: z.string().optional(),
  appealDetails: z.string().optional(),
  contributorWallet: z.string().default(""),
});

// List current user's uploaded files.
uploadRoutes.get("/files", async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ files: [] });
  const files = await pinataService.listFilesByUser(user.id);
  return c.json({ files });
});

// Raw file upload (PDF, JSON, etc.) — stores directly on IPFS.
uploadRoutes.post("/file", async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const body = await c.req.parseBody();
  const file = body["file"];

  if (!(file instanceof File)) {
    return c.json({ error: "No file provided" }, 400);
  }

  const name = `upload-${Date.now()}-${file.name}`;
  const upload = await pinataService.uploadRawFile(file, name, user.id);

  return c.json({
    cid: upload.cid,
    name: upload.name ?? name,
  });
});

uploadRoutes.post("/case", zValidator("json", caseUploadSchema), async (c) => {
  const user = await getUser(c);
  const userId = user?.id ?? "";
  const data = c.req.valid("json");

  // Strip PII from text fields.
  const { redacted: narrative } = stripPII(data.narrative);
  const { redacted: keyFactors } = stripPII(data.keyFactors);
  const { redacted: lessonsLearned } = stripPII(data.lessonsLearned);

  const sanitized = {
    ...data,
    narrative,
    keyFactors,
    lessonsLearned,
  };

  const { contributorWallet, ...caseData } = sanitized;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const upload = await pinataService.uploadCase(caseData as any, contributorWallet, userId);

  // Sign the case file.
  const signature = await pinataService.signCase(upload.cid);

  return c.json({
    cid: upload.cid,
    name: upload.name,
    signature: typeof signature === "string" ? signature : null,
  });
});
