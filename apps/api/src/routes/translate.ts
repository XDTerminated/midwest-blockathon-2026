import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import OpenAI from "openai";
import { z } from "zod";

import { getUser } from "../lib/auth";

export const translateRoutes = new Hono();

translateRoutes.use("*", async (c, next) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  await next();
});

const translateSchema = z.object({
  texts: z.record(z.string()),
  targetLang: z.string().min(2).max(5),
});

const LANG_NAMES: Record<string, string> = {
  es: "Spanish", zh: "Chinese", ar: "Arabic", hi: "Hindi", fr: "French",
  ht: "Haitian Creole", pt: "Portuguese", ko: "Korean", vi: "Vietnamese", tl: "Tagalog",
};

const getClient = () =>
  new OpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
  });

translateRoutes.post("/", zValidator("json", translateSchema), async (c) => {
  const { texts, targetLang } = c.req.valid("json");

  if (targetLang === "en") {
    return c.json({ translations: texts });
  }

  const entries = Object.entries(texts);
  if (entries.length === 0) {
    return c.json({ translations: {} });
  }

  const numbered = entries.map(([key, val], i) => `[${i}] ${val}`).join("\n");

  const completion = await getClient().chat.completions.create({
    model: process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `You are a translator. Translate the following numbered texts into ${LANG_NAMES[targetLang] ?? targetLang}. Keep the exact [N] numbering prefix on each line. Output ONLY the translated lines, nothing else.`,
      },
      { role: "user", content: numbered },
    ],
  });

  const raw = completion.choices[0]?.message?.content ?? "";
  const translations: Record<string, string> = {};

  // Parse [N] lines back into the record — flexible regex to handle various LLM formatting.
  for (const line of raw.split("\n")) {
    const match = line.match(/\[(\d+)\]\s*[:：]?\s*(.+)/);
    if (match) {
      const idx = parseInt(match[1], 10);
      if (idx < entries.length) {
        translations[entries[idx][0]] = match[2].trim();
      }
    }
  }

  // Fill any missing keys with originals.
  for (const [key, val] of entries) {
    if (!translations[key]) translations[key] = val;
  }

  return c.json({ translations });
});
