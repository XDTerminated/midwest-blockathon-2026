import OpenAI from "openai";
import type { CaseRecord, CitedCaseRef, SearchResult } from "@immivault/shared";
import { LEGAL_DISCLAIMER } from "@immivault/shared";

const GROQ_MODEL = process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile";

function getClient() {
  return new OpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
  });
}

const SYSTEM_PROMPT = `You are Lumina, an immigration legal research tool. You give clear, useful information to help immigrants understand their options.

RULES:
- Legal info only, not advice. Never promise outcomes.
- Simple, clear English. Avoid jargon — explain terms if needed.
- Reference cases as [Case CID: <cid>] when relevant.
- Be welcoming but informational — like a helpful librarian, not a therapist.

YOUR RESPONSE MUST BE:
- MAX 80 words. This is strict.
- NO headers. NO bold. NO bullet points. NO lists. NO markdown formatting at all.
- Just 2 short paragraphs of plain text.
- First paragraph: give them the key information — what type of case applies, what similar cases show, and any relevant details from the case library.
- Second paragraph: ask 1 specific follow-up question that would help you give better info, and note that an immigration lawyer can give personalized guidance.

Tone: helpful, direct, and welcoming. Informative first, warm second.`;

function formatCaseForContext(c: CaseRecord & { cid?: string }, index: number): string {
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

export const claudeService = {
  async synthesize(userQuery: string, cases: CaseRecord[]): Promise<SearchResult> {
    const caseContext =
      cases.length > 0
        ? cases.map((c, i) => formatCaseForContext(c, i)).join("\n\n---\n\n")
        : "No cases currently match this query in the Lumina library.";

    const userMessage = `USER'S SITUATION:
${userQuery}

CASE LIBRARY (real anonymized cases from Lumina contributors):
${caseContext}

MAX 80 words. No headers. No lists. No markdown. Just 2 plain paragraphs.`;

    const completion = await getClient().chat.completions.create({
      model: GROQ_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userMessage },
      ],
    });

    const analysis = completion.choices[0]?.message?.content ?? "";

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
      analysis,
      citedCases,
      disclaimer: LEGAL_DISCLAIMER,
    };
  },
};
