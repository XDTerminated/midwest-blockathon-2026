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

const SYSTEM_PROMPT = `You are a kind, simple helper for ImmiVault. You chat with immigrants about their situation.

RULES:
- Legal info only, not advice. Never promise outcomes.
- Simple English a child could understand. Short sentences.
- Reference cases as [Case CID: <cid>] when relevant.

YOUR RESPONSE MUST BE:
- MAX 80 words. This is strict.
- NO headers. NO bold. NO bullet points. NO lists. NO markdown formatting at all.
- Just 2 short paragraphs of plain text.
- First paragraph: answer their question in 2-3 simple sentences. Mention a case if one exists.
- Second paragraph: ask 1 follow-up question, then remind them a lawyer can help.

Example tone: "It sounds like you might qualify for asylum. We found a case like yours [Case CID: abc] where someone was approved in 10 months. Can you tell me more about when you arrived? A lawyer can help you figure out the best path — many offer free first meetings."`;

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
        : "No cases currently match this query in the ImmiVault library.";

    const userMessage = `USER'S SITUATION:
${userQuery}

CASE LIBRARY (real anonymized cases from ImmiVault contributors):
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
