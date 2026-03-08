import { type CaseRecord, type CitedCaseRef, LEGAL_DISCLAIMER, type SearchResult } from "@immivault/shared";
import { config } from "dotenv";
import OpenAI from "openai";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

// Ensure env vars are loaded before using GROQ_API_KEY.
if (!process.env.GROQ_API_KEY) {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  config({ path: resolve(__dirname, "../../../../.env") });
}

const GROQ_MODEL = process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile";

const getClient = () => {
  return new OpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
  });
};

const SYSTEM_PROMPT = `You are Lumina, an AI assistant on an immigration legal research platform. You can answer general questions AND help with immigration research.

IMPORTANT: Not every message is about immigration. If someone asks a general question (like "what do you do", "how does this work", "hello", etc.), answer it normally. Only search the case library when someone describes an actual immigration situation.

REPETITION RULE: You may introduce yourself and explain what you do on the FIRST message of a conversation (when there is no prior chat history). After that, NEVER re-introduce yourself or repeat the same pitch. If the user already knows what you do from earlier in the conversation, just answer their question directly.

FOR GENERAL QUESTIONS:
- On the first message: warmly introduce yourself — you're Lumina, you help immigrants find real, anonymized case outcomes to understand their options, they can describe their situation and you'll find similar cases.
- On follow-up messages: skip the intro, just answer naturally.
- If the user specifically asks again what you do, give a brief refresher.
- Keep it short and friendly.

FOR IMMIGRATION QUESTIONS:
- Legal info only, not advice. Never promise outcomes.
- Simple, clear English. Avoid jargon — explain terms if needed.
- When referencing cases from the CASE LIBRARY, describe them naturally (e.g. "a similar case involved...") and add a reference tag like [case:1], [case:2] etc. matching the case number from the library. This lets users click through to the full case. NEVER expose raw CIDs, hashes, or internal identifiers. If no cases are provided, do NOT reference any cases at all.
- Be welcoming but informational — like a helpful librarian, not a therapist.
- First give the key information, then ask 1 follow-up question to help narrow things down.

LANGUAGE — THIS IS CRITICAL:
- Detect the language the user is writing in.
- You MUST respond ENTIRELY in the SAME language the user used. If they write "hola", respond fully in Spanish. If they write in Mandarin, respond fully in Mandarin. If Haitian Creole, respond fully in Haitian Creole. Match the user's language EXACTLY.
- If the language is unclear, default to English.
- Even your introduction must be in the user's language. Do NOT default to English when the user writes in another language.

ALL RESPONSES:
- MAX 80 words. This is strict.
- NO headers. NO bold. NO bullet points. NO lists. NO markdown formatting at all.
- Just 1-2 short paragraphs of plain text.
- After your response, on a NEW LINE by itself, add the tag LANG:xx (where xx is the ISO 639-1 code of the language you detected, e.g. LANG:en, LANG:es, LANG:zh, LANG:ar). This tag will be automatically removed.`;

const formatCaseForContext = (c: CaseRecord & { cid?: string }, index: number): string => {
  return `
CASE ${index + 1} [CID: ${c.cid ?? "unknown"}]:
Type: ${c.caseType ?? "unknown"}
Country of Origin: ${c.countryOfOrigin ?? "unknown"}
Outcome: ${c.outcome ?? "unknown"}
Year: ${c.year ?? "unknown"}
Court/Office: ${c.court ?? "Not specified"}
Timeline: ${c.timelineMonths ?? "unknown"} months
Had Attorney: ${c.lawyerUsed ? "Yes" : "No"}
Narrative: ${c.narrative ?? "N/A"}
Key Factors: ${c.keyFactors ?? "N/A"}
Documents Used: ${(c.documentsUsed ?? []).join(", ") || "N/A"}
Lessons Learned: ${c.lessonsLearned ?? "N/A"}
`.trim();
};

export type ChatMessage = { role: "user" | "assistant"; content: string };

export const claudeService = {
  async synthesize(
    userQuery: string,
    cases: CaseRecord[],
    history: ChatMessage[] = []
  ): Promise<SearchResult> {
    const caseContext =
      cases.length > 0
        ? cases.map((c, i) => formatCaseForContext(c, i)).join("\n\n---\n\n")
        : "No cases currently match this query in the Lumina library.";

    const userMessage = `USER'S SITUATION:
${userQuery}

CASE LIBRARY (real anonymized cases from Lumina contributors):
${caseContext}

MAX 80 words. No headers. No lists. No markdown. Just 2 plain paragraphs.`;

    // Build messages: system + prior conversation + new user message with case context.
    const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.slice(-10), // Keep last 10 messages for context.
      { role: "user", content: userMessage },
    ];

    const completion = await getClient().chat.completions.create({
      model: GROQ_MODEL,
      messages,
    });

    let analysis = completion.choices[0]?.message?.content ?? "";

    // Extract detected language from LANG:xx tag anywhere in the response.
    let detectedLanguage = "en";
    const langMatch = analysis.match(/\bLANG:\s*([a-z]{2,3})\b/i);
    if (langMatch) {
      detectedLanguage = langMatch[1].toLowerCase();
      // Strip all occurrences of the LANG tag (may appear inline or on its own line).
      analysis = analysis.replace(/\s*\bLANG:\s*[a-z]{2,3}\b\s*/gi, " ").trim();
    }

    // Find all [case:N] references and map them to actual cases.
    const citedCases: CitedCaseRef[] = [];
    const citedSet = new Set<string>();
    const caseRefPattern = /\[case:(\d+)\]/gi;
    let refMatch;
    while ((refMatch = caseRefPattern.exec(analysis)) !== null) {
      const idx = parseInt(refMatch[1], 10) - 1; // 1-based to 0-based
      if (idx >= 0 && idx < cases.length && cases[idx].cid && !citedSet.has(cases[idx].cid!)) {
        citedSet.add(cases[idx].cid!);
        citedCases.push({
          cid: cases[idx].cid!,
          type: cases[idx].caseType,
          outcome: cases[idx].outcome,
          country: cases[idx].countryOfOrigin,
          year: cases[idx].year,
        });
      }
    }

    // Replace [case:N] with [case:N|CID] so the frontend can link them.
    analysis = analysis.replace(/\[case:(\d+)\]/gi, (_match, num) => {
      const idx = parseInt(num, 10) - 1;
      if (idx >= 0 && idx < cases.length && cases[idx].cid) {
        return `[case:${num}|${cases[idx].cid}]`;
      }
      return "";
    });

    return {
      analysis: analysis.trim(),
      citedCases,
      disclaimer: LEGAL_DISCLAIMER,
      detectedLanguage,
    };
  },
};
