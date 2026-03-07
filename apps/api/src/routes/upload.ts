import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { pinataService } from "../services/pinata";
import { stripPII } from "../services/anonymize";

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

uploadRoutes.post("/case", zValidator("json", caseUploadSchema), async (c) => {
  const data = c.req.valid("json");

  // Strip PII from text fields
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
  const upload = await pinataService.uploadCase(caseData as any, contributorWallet);

  // Sign the case file
  const signature = await pinataService.signCase(upload.cid);

  return c.json({
    cid: upload.cid,
    name: upload.name,
    signature: typeof signature === "string" ? signature : null,
  });
});
