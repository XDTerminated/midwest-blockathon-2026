import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

import { getUser } from "../lib/auth";

export const ttsRoutes = new Hono();

// Require auth.
ttsRoutes.use("*", async (c, next) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  await next();
});

// Language to ElevenLabs voice ID mapping.
// Using voices that sound natural for each language family.
const VOICE_MAP: Record<string, string> = {
  en: "EXAVITQu4vr4xnSDxMaL",  // Sarah — clear English.
  es: "XrExE9yKIg1WjnnlVkGX",  // Matilda — warm, works great for Spanish.
  zh: "pFZP5JQG7iQjIQuC4Bku", // Lily — good for Mandarin.
  fr: "XrExE9yKIg1WjnnlVkGX",  // Matilda — French.
  pt: "XrExE9yKIg1WjnnlVkGX",  // Matilda — Portuguese.
  ar: "onwK4e9ZLuTAKqWW03F9", // Daniel — Arabic.
  hi: "pFZP5JQG7iQjIQuC4Bku", // Lily — Hindi.
  ko: "pFZP5JQG7iQjIQuC4Bku", // Lily — Korean.
  vi: "pFZP5JQG7iQjIQuC4Bku", // Lily — Vietnamese.
  ht: "XrExE9yKIg1WjnnlVkGX",  // Matilda — Haitian Creole.
  tl: "pFZP5JQG7iQjIQuC4Bku", // Lily — Tagalog.
  ru: "onwK4e9ZLuTAKqWW03F9", // Daniel — Russian.
  uk: "onwK4e9ZLuTAKqWW03F9", // Daniel — Ukrainian.
  ja: "pFZP5JQG7iQjIQuC4Bku", // Lily — Japanese.
};

const DEFAULT_VOICE = "EXAVITQu4vr4xnSDxMaL"; // Sarah.

const ttsSchema = z.object({
  text: z.string().min(1).max(5000),
  lang: z.string().default("en"),
});

ttsRoutes.post("/", zValidator("json", ttsSchema), async (c) => {
  const { text, lang } = c.req.valid("json");

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return c.json({ error: "ElevenLabs API key not configured" }, 500);
  }

  const voiceId = VOICE_MAP[lang] ?? DEFAULT_VOICE;

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.3,
        },
      }),
    }
  );

  if (!response.ok) {
    const err = await response.text();
    console.error("ElevenLabs error:", err);
    return c.json({ error: "TTS generation failed" }, 502);
  }

  const audioBuffer = await response.arrayBuffer();

  c.header("Content-Type", "audio/mpeg");
  c.header("Cache-Control", "public, max-age=3600");
  return c.body(audioBuffer);
});
