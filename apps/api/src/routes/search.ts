import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { pinataService } from "../services/pinata";
import { claudeService } from "../services/claude";

export const searchRoutes = new Hono();

const searchQuerySchema = z.object({
  q: z.string().min(1).max(500),
  caseType: z.string().optional(),
  country: z.string().optional(),
  outcome: z.string().optional(),
  limit: z.coerce.number().min(1).max(20).default(10),
});

searchRoutes.get("/", zValidator("query", searchQuerySchema), async (c) => {
  const { q, limit } = c.req.valid("query");

  let cases: Awaited<ReturnType<typeof pinataService.searchCases>> = [];
  try {
    cases = await pinataService.searchCases(q, limit);
  } catch (err) {
    console.error("Pinata search error (non-fatal):", err);
    // Continue with empty cases — Claude still synthesizes a general response
  }

  try {
    const result = await claudeService.synthesize(q, cases);
    return c.json(result);
  } catch (err) {
    console.error("Claude synthesis error:", err);
    return c.json({
      analysis:
        "AI synthesis is temporarily unavailable. Check that GROQ_API_KEY is set correctly.",
      citedCases: [],
      disclaimer:
        "This is legal information, not legal advice. Consult a qualified immigration attorney.",
    });
  }
});
