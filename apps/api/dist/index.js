// src/index.ts
import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono as Hono6 } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

// src/routes/search.ts
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

// src/services/pinata.ts
import { PinataSDK } from "pinata";
var pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: process.env.PINATA_GATEWAY
});
function getGroups() {
  try {
    return JSON.parse(process.env.PINATA_GROUPS ?? "{}");
  } catch {
    return {};
  }
}
var CASE_TYPE_TO_SLUG = {
  asylum: "asylum-refugee",
  "green-card-family": "green-card-family",
  "green-card-employment": "green-card-employment",
  "cancellation-removal-lpr": "removal-defense",
  "cancellation-removal-non-lpr": "removal-defense",
  "deportation-defense": "removal-defense",
  "voluntary-departure": "removal-defense",
  "motion-to-reopen": "removal-defense",
  "u-visa": "victim-protections",
  "t-visa": "victim-protections",
  vawa: "victim-protections",
  sijs: "victim-protections",
  tps: "humanitarian",
  daca: "humanitarian",
  h1b: "work-visas",
  l1: "work-visas",
  o1: "work-visas",
  naturalization: "citizenship",
  "k1-fiance": "family-reunification"
};
function groupIdForCaseType(caseType) {
  const groups = getGroups();
  const slug = CASE_TYPE_TO_SLUG[caseType];
  return slug ? groups[slug] : void 0;
}
function fileListItemToCaseListItem(f) {
  return {
    cid: f.cid,
    name: f.name ?? "",
    caseType: f.keyvalues?.caseType ?? "asylum",
    countryOfOrigin: f.keyvalues?.countryOfOrigin ?? "",
    outcome: f.keyvalues?.outcome ?? "pending",
    year: f.keyvalues?.year ?? "",
    court: f.keyvalues?.court,
    lawyerUsed: f.keyvalues?.lawyerUsed,
    createdAt: f.created_at
  };
}
var pinataService = {
  async uploadCase(data, contributorWallet) {
    const payload = { ...data, contributorWallet, uploadedAt: (/* @__PURE__ */ new Date()).toISOString() };
    const file = new File(
      [JSON.stringify(payload)],
      `case-${Date.now()}.json`,
      { type: "application/json" }
    );
    const groupId = groupIdForCaseType(data.caseType);
    const keyvalues = {
      caseType: data.caseType,
      countryOfOrigin: data.countryOfOrigin,
      outcome: data.outcome,
      year: data.year,
      court: data.court ?? "",
      contributorWallet,
      lawyerUsed: String(data.lawyerUsed),
      timelineMonths: String(data.timelineMonths)
    };
    const name = `${data.caseType}-${data.countryOfOrigin.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`;
    let builder = pinata.upload.file(file).addMetadata({ name, keyvalues });
    if (groupId) builder = builder.group(groupId);
    try {
      return await builder.vectorize();
    } catch {
      return await pinata.upload.file(file).addMetadata({ name, keyvalues });
    }
  },
  async searchCases(query, limit = 10) {
    const groups = getGroups();
    const groupIds = Object.values(groups);
    if (groupIds.length === 0) {
      return this.listAllCaseData(limit).catch(() => []);
    }
    const matches = [];
    for (const groupId of groupIds) {
      try {
        const result = await pinata.files.queryVectors({ groupId, query, returnFile: false });
        if (result?.matches) {
          for (const m of result.matches) {
            matches.push({ fileId: m.file_id, cid: m.cid, score: m.score });
          }
        }
      } catch {
      }
    }
    matches.sort((a, b) => b.score - a.score);
    const topMatches = matches.slice(0, limit);
    if (topMatches.length === 0) {
      return this.listAllCaseData(limit);
    }
    const cases = await Promise.all(
      topMatches.map((m) => this.getCase(m.cid).catch(() => null))
    );
    return cases.filter(Boolean);
  },
  async listAllCaseData(limit = 20) {
    try {
      const result = await pinata.files.list().limit(limit);
      const cases = await Promise.all(
        (result.files ?? []).map((f) => this.getCase(f.cid).catch(() => null))
      );
      return cases.filter(Boolean);
    } catch {
      return [];
    }
  },
  async listCases(limit = 20) {
    try {
      const result = await pinata.files.list().limit(limit);
      return (result.files ?? []).map(fileListItemToCaseListItem);
    } catch {
      return [];
    }
  },
  async listByCategory(slug, limit = 20) {
    const groups = getGroups();
    const groupId = groups[slug];
    if (!groupId) return [];
    try {
      const result = await pinata.files.list().group(groupId).limit(limit);
      return (result.files ?? []).map(fileListItemToCaseListItem);
    } catch {
      return [];
    }
  },
  async getCase(cid) {
    const response = await pinata.gateways.get(cid);
    const raw = response.data;
    if (typeof raw === "string") return { ...JSON.parse(raw), cid };
    if (raw && typeof raw === "object") return { ...raw, cid };
    throw new Error(`Unexpected response type for CID ${cid}`);
  },
  async signCase(_cid) {
    return null;
  },
  async getSignature(_cid) {
    return { isValid: true, signedAt: void 0, signedBy: void 0 };
  },
  async createPresignedUrl(cid, expiresSeconds) {
    const result = await pinata.gateways.createSignedURL({ cid, expires: expiresSeconds });
    if (typeof result === "string") return result;
    if (result?.url) return result.url;
    throw new Error("Unexpected createSignedURL response");
  }
};

// src/services/claude.ts
import OpenAI from "openai";

// ../../packages/shared/src/constants.ts
var LEGAL_DISCLAIMER = "This is legal information based on anonymized case data, not legal advice. Immigration cases are highly fact-specific. Please consult a qualified immigration attorney for advice about your specific situation.";

// src/services/claude.ts
var OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL ?? "http://localhost:11434/v1";
var OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "llama3.2";
var client = new OpenAI({
  baseURL: OLLAMA_BASE_URL,
  apiKey: "ollama"
  // Ollama doesn't require a real key
});
var SYSTEM_PROMPT = `You are a legal research assistant for ImmiVault, a platform that helps immigrants understand their legal options based on real, anonymized case data contributed by other immigrants.

CRITICAL RULES:
1. You provide legal INFORMATION, not legal ADVICE. Always end with a recommendation to consult a qualified immigration attorney.
2. Cite specific cases by their CID (content identifier) when referencing them. Format: [Case CID: <cid>]
3. Identify which immigration categories may apply to the user's situation.
4. Describe what happened in similar cases \u2014 outcomes, timelines, documents used, strategies that worked.
5. Never guarantee outcomes. Immigration cases are highly fact-specific.
6. If the case library doesn't have directly relevant cases, say so honestly and provide general information about the applicable categories.
7. List documents typically needed for the identified case types.
8. Be compassionate. The person reading this may be scared, in legal jeopardy, and without resources.
9. Use plain language. Avoid legal jargon where possible. Explain terms when you must use them.

FORMAT YOUR RESPONSE AS:
## Applicable Immigration Categories
[List the most likely categories based on the user's situation]

## Similar Cases from the ImmiVault Library
[Summarize relevant cases with citations \u2014 [Case CID: <cid>] \u2014 outcomes, timelines, key factors]

## Typical Documents & Forms Needed
[Bullet list of relevant documents and USCIS/EOIR forms]

## Key Factors That Affect Outcomes
[Based on the cases, what seemed to make a difference]

## Recommended Next Steps
[Practical steps the person can take, ending with "Consult a qualified immigration attorney"]

---
DISCLAIMER: This platform provides legal information based on publicly shared anonymized case data. It is not a substitute for professional legal advice. Consult a qualified immigration attorney for your specific situation.`;
function formatCaseForContext(c, index) {
  return `
CASE ${index + 1} [CID: ${c.cid ?? "unknown"}]:
Type: ${c.caseType}
Country of Origin: ${c.countryOfOrigin}
Outcome: ${c.outcome}
Year: ${c.year}
Court/Office: ${c.court ?? "Not specified"}
Timeline: ${c.timelineMonths} months
Had Attorney: ${c.lawyerUsed ? "Yes" : "No"}
Narrative: ${c.narrative}
Key Factors: ${c.keyFactors}
Documents Used: ${c.documentsUsed.join(", ")}
Lessons Learned: ${c.lessonsLearned}
`.trim();
}
var claudeService = {
  async synthesize(userQuery, cases) {
    const caseContext = cases.length > 0 ? cases.map((c, i) => formatCaseForContext(c, i)).join("\n\n---\n\n") : "No cases currently match this query in the ImmiVault library.";
    const userMessage = `USER'S SITUATION:
${userQuery}

CASE LIBRARY (real anonymized cases from ImmiVault contributors):
${caseContext}

Based on the user's situation and the cases above, provide a comprehensive legal research summary. Cite specific cases by CID using the format [Case CID: <cid>]. Be compassionate and practical.`;
    const completion = await client.chat.completions.create({
      model: OLLAMA_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userMessage }
      ]
    });
    const analysis = completion.choices[0]?.message?.content ?? "";
    const citedCases = cases.filter((c) => c.cid && analysis.includes(c.cid)).map((c) => ({
      cid: c.cid,
      type: c.caseType,
      outcome: c.outcome,
      country: c.countryOfOrigin,
      year: c.year
    }));
    return {
      analysis,
      citedCases,
      disclaimer: LEGAL_DISCLAIMER
    };
  }
};

// src/routes/search.ts
var searchRoutes = new Hono();
var searchQuerySchema = z.object({
  q: z.string().min(1).max(500),
  caseType: z.string().optional(),
  country: z.string().optional(),
  outcome: z.string().optional(),
  limit: z.coerce.number().min(1).max(20).default(10)
});
searchRoutes.get("/", zValidator("query", searchQuerySchema), async (c) => {
  const { q, limit } = c.req.valid("query");
  let cases = [];
  try {
    cases = await pinataService.searchCases(q, limit);
  } catch (err) {
    console.error("Pinata search error (non-fatal):", err);
  }
  try {
    const result = await claudeService.synthesize(q, cases);
    return c.json(result);
  } catch (err) {
    console.error("Claude synthesis error:", err);
    return c.json({
      analysis: "AI synthesis is temporarily unavailable. Make sure Ollama is running (`ollama serve`) and OLLAMA_MODEL is pulled (`ollama pull llama3.2`).",
      citedCases: [],
      disclaimer: "This is legal information, not legal advice. Consult a qualified immigration attorney."
    });
  }
});

// src/routes/cases.ts
import { Hono as Hono2 } from "hono";

// src/middleware/x402.ts
function paymentRequired() {
  return async (c, next) => {
    const paymentProof = c.req.header("X-Payment-Proof");
    if (!paymentProof) {
      return c.json(
        {
          error: "Payment Required",
          amount: "0.10",
          asset: "USDC",
          network: "base",
          description: "Full case access requires a $0.10 USDC micropayment on the Base network. Payment goes directly to the case contributor.",
          paymentInstructions: "Connect your wallet, send 0.10 USDC to the contributor's address on Base, then retry with the transaction hash in the X-Payment-Proof header."
        },
        402,
        {
          "X-Accepts-Payment": "x402; network=base; asset=USDC; amount=0.10",
          "Access-Control-Expose-Headers": "X-Accepts-Payment"
        }
      );
    }
    await next();
  };
}

// src/routes/cases.ts
var caseRoutes = new Hono2();
caseRoutes.get("/", async (c) => {
  const page = Number(c.req.query("page") ?? 1);
  const limit = Math.min(Number(c.req.query("limit") ?? 20), 50);
  const cases = await pinataService.listCases(limit);
  return c.json({ cases, page, limit });
});
caseRoutes.get("/category/:slug", async (c) => {
  const slug = c.req.param("slug");
  const cases = await pinataService.listByCategory(slug);
  return c.json({ cases, slug });
});
caseRoutes.get("/:cid", paymentRequired(), async (c) => {
  const cid = c.req.param("cid") ?? "";
  const caseData = await pinataService.getCase(cid);
  return c.json({ ...caseData, cid });
});

// src/routes/upload.ts
import { Hono as Hono3 } from "hono";
import { zValidator as zValidator2 } from "@hono/zod-validator";
import { z as z2 } from "zod";

// src/services/anonymize.ts
var PII_PATTERNS = [
  // A-Numbers (immigration file numbers)
  { pattern: /\bA[-\s]?\d{8,9}\b/gi, replacement: "[A-NUMBER REDACTED]" },
  // Social Security Numbers
  { pattern: /\b\d{3}[-\s]\d{2}[-\s]\d{4}\b/g, replacement: "[SSN REDACTED]" },
  // Phone numbers (US formats)
  {
    pattern: /\b(\+1[-.\s]?)?\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}\b/g,
    replacement: "[PHONE REDACTED]"
  },
  // Email addresses
  {
    pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}\b/gi,
    replacement: "[EMAIL REDACTED]"
  },
  // Street addresses (heuristic)
  {
    pattern: /\b\d+\s+[A-Za-z\s]+(Street|St|Avenue|Ave|Boulevard|Blvd|Drive|Dr|Road|Rd|Lane|Ln|Court|Ct|Way|Place|Pl)\b\.?/gi,
    replacement: "[ADDRESS REDACTED]"
  },
  // ZIP codes
  { pattern: /\b\d{5}(-\d{4})?\b/g, replacement: "[ZIP REDACTED]" },
  // Case/file numbers that aren't A-numbers
  { pattern: /\b(case|file|receipt)\s*#?\s*\d{10,}\b/gi, replacement: "[FILE NUMBER REDACTED]" }
];
function stripPII(text) {
  let redacted = text;
  let hadPII = false;
  for (const { pattern, replacement } of PII_PATTERNS) {
    const before = redacted;
    redacted = redacted.replace(pattern, replacement);
    if (redacted !== before) hadPII = true;
  }
  return { redacted, hadPII };
}

// src/routes/upload.ts
var uploadRoutes = new Hono3();
var caseUploadSchema = z2.object({
  caseType: z2.string().min(1),
  countryOfOrigin: z2.string().min(1),
  outcome: z2.enum(["approved", "denied", "pending", "appealed", "withdrawn", "remanded"]),
  year: z2.string().regex(/^\d{4}$/),
  court: z2.string().optional(),
  narrative: z2.string().min(50).max(5e3),
  documentsUsed: z2.array(z2.string()).min(1),
  keyFactors: z2.string().min(20).max(1e3),
  lessonsLearned: z2.string().min(20).max(1e3),
  timelineMonths: z2.coerce.number().min(1).max(240),
  lawyerUsed: z2.boolean(),
  formsUsed: z2.array(z2.string()),
  interviewDetails: z2.string().optional(),
  rfesReceived: z2.string().optional(),
  denialReasons: z2.string().optional(),
  appealDetails: z2.string().optional(),
  contributorWallet: z2.string().default("")
});
uploadRoutes.post("/case", zValidator2("json", caseUploadSchema), async (c) => {
  const data = c.req.valid("json");
  const { redacted: narrative } = stripPII(data.narrative);
  const { redacted: keyFactors } = stripPII(data.keyFactors);
  const { redacted: lessonsLearned } = stripPII(data.lessonsLearned);
  const sanitized = {
    ...data,
    narrative,
    keyFactors,
    lessonsLearned
  };
  const { contributorWallet, ...caseData } = sanitized;
  const upload = await pinataService.uploadCase(caseData, contributorWallet);
  const signature = await pinataService.signCase(upload.cid);
  return c.json({
    cid: upload.cid,
    name: upload.name,
    signature: typeof signature === "string" ? signature : null
  });
});

// src/routes/verify.ts
import { Hono as Hono4 } from "hono";
var verifyRoutes = new Hono4();
verifyRoutes.get("/:cid", async (c) => {
  const cid = c.req.param("cid");
  const sig = await pinataService.getSignature(cid);
  if (!sig) {
    return c.json({ cid, isValid: false, signedAt: null, signedBy: null });
  }
  return c.json({
    cid,
    isValid: sig.isValid ?? true,
    signedAt: sig.signedAt ?? null,
    signedBy: sig.signedBy ?? null
  });
});

// src/routes/share.ts
import { Hono as Hono5 } from "hono";
import { zValidator as zValidator3 } from "@hono/zod-validator";
import { z as z3 } from "zod";
var shareRoutes = new Hono5();
var presignSchema = z3.object({
  cid: z3.string().min(1),
  expiresMinutes: z3.number().min(5).max(10080).default(1440)
  // max 7 days
});
shareRoutes.post("/presign", zValidator3("json", presignSchema), async (c) => {
  const { cid, expiresMinutes } = c.req.valid("json");
  const expiresSeconds = expiresMinutes * 60;
  const url = await pinataService.createPresignedUrl(cid, expiresSeconds);
  const expiresAt = new Date(Date.now() + expiresSeconds * 1e3).toISOString();
  return c.json({ url, expiresAt, expiresMinutes });
});

// src/index.ts
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection (non-fatal):", reason);
});
var app = new Hono6();
app.use(
  "*",
  cors({
    origin: [
      process.env.WEB_URL ?? "http://localhost:3000",
      "http://localhost:3000"
    ],
    allowHeaders: ["Content-Type", "X-Payment-Proof"],
    exposeHeaders: ["X-Accepts-Payment"]
  })
);
app.use("*", logger());
app.onError((err, c) => {
  console.error("API error:", err.message);
  return c.json({ error: "Internal server error", message: err.message }, 500);
});
app.get("/health", (c) => c.json({ ok: true, service: "immivault-api" }));
app.route("/api/search", searchRoutes);
app.route("/api/cases", caseRoutes);
app.route("/api/upload", uploadRoutes);
app.route("/api/verify", verifyRoutes);
app.route("/api/share", shareRoutes);
var port = Number(process.env.PORT ?? 3001);
console.log(`ImmiVault API running on http://localhost:${port}`);
serve({ fetch: app.fetch, port });
