import { config } from "dotenv";
import OpenAI from "openai";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import type { CaseRecord, CitedCaseRef, SearchResult } from "@immivault/shared";
import { LEGAL_DISCLAIMER } from "@immivault/shared";

// Ensure env vars are loaded before using GROQ_API_KEY
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

FOR GENERAL QUESTIONS:
- Explain that Lumina is a platform where immigrants can search real, anonymized case outcomes shared by other immigrants to understand their options.
- Users can describe their situation and Lumina will find similar cases, show what happened, and suggest next steps.
- Cases are stored on IPFS so they can't be altered. Contributors can earn micropayments when their cases help others.
- Keep it short and friendly.

FOR IMMIGRATION QUESTIONS:
- Legal info only, not advice. Never promise outcomes.
- Simple, clear English. Avoid jargon — explain terms if needed.
- ONLY reference cases that appear in the CASE LIBRARY below. Use format [Case CID: <cid>] with the exact CID provided. NEVER invent, fabricate, or guess a CID. If no cases are provided, do NOT reference any cases at all.
- Be welcoming but informational — like a helpful librarian, not a therapist.
- First give the key information, then ask 1 follow-up question to help narrow things down.

LANGUAGE:
- Detect the language the user is writing or speaking in.
- ALWAYS respond in the SAME language the user used. If they write in Spanish, respond in Spanish. If Mandarin, respond in Mandarin. If Haitian Creole, respond in Haitian Creole. And so on.
- If the language is unclear, default to English.

ALL RESPONSES:
- MAX 80 words. This is strict.
- NO headers. NO bold. NO bullet points. NO lists. NO markdown formatting at all.
- Just 1-2 short paragraphs of plain text.`;

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

    // Build messages: system + prior conversation + new user message with case context
    const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.slice(-10), // keep last 10 messages for context
      { role: "user", content: userMessage },
    ];

    const completion = await getClient().chat.completions.create({
      model: GROQ_MODEL,
      messages,
    });

    let analysis = completion.choices[0]?.message?.content ?? "";

    // Collect valid CIDs from the cases we actually provided
    const validCids = new Set(cases.map((c) => c.cid).filter(Boolean));

    // Strip any [Case CID: ...] references that don't match real cases
    analysis = analysis.replace(/\[Case CID:\s*([^\]]+)\]/g, (match, cid) => {
      const trimmed = cid.trim();
      return validCids.has(trimmed) ? match : "";
    });

    const citedCases: CitedCaseRef[] = cases
      .filter((c) => c.cid && analysis.includes(c.cid))
      .map((c) => ({
        cid: c.cid!,
        type: c.caseType,
        outcome: c.outcome,
        country: c.countryOfOrigin,
        year: c.year,
      }));

    return {
      analysis: analysis.trim(),
      citedCases,
      disclaimer: LEGAL_DISCLAIMER,
    };
  },
};
