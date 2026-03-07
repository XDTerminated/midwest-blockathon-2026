import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

import { getUser } from "../lib/auth";
import { claudeService, type ChatMessage } from "../services/claude";
import { pinataService } from "../services/pinata";

export const searchRoutes = new Hono();

// Require auth for search.
searchRoutes.use("*", async (c, next) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  await next();
});

const searchQuerySchema = z.object({
  q: z.string().min(1).max(500),
  caseType: z.string().optional(),
  country: z.string().optional(),
  outcome: z.string().optional(),
  limit: z.coerce.number().min(1).max(20).default(10),
});

searchRoutes.get("/", zValidator("query", searchQuerySchema), async (c) => {
  const { q, limit } = c.req.valid("query");
  const user = await getUser(c);
  const userId = user?.id ?? "";

  let cases: Awaited<ReturnType<typeof pinataService.searchCases>> = [];
  try {
    cases = await pinataService.searchCases(q, userId, limit);
  } catch (err) {
    console.error("Pinata search error (non-fatal):", err);
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

// POST route with conversation history.
const chatSchema = z.object({
  q: z.string().min(1).max(500),
  history: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string(),
  })).default([]),
  limit: z.coerce.number().min(1).max(20).default(10),
});

searchRoutes.post("/", zValidator("json", chatSchema), async (c) => {
  const { q, history, limit } = c.req.valid("json");
  const user = await getUser(c);
  const userId = user?.id ?? "";

  let cases: Awaited<ReturnType<typeof pinataService.searchCases>> = [];
  try {
    cases = await pinataService.searchCases(q, userId, limit);
  } catch (err) {
    console.error("Pinata search error (non-fatal):", err);
  }

  try {
    const result = await claudeService.synthesize(q, cases, history as ChatMessage[]);
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
