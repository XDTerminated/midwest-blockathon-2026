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

const SYSTEM_PROMPT = `You are a legal research assistant for ImmiVault, a platform that helps immigrants understand their legal options based on real, anonymized case data contributed by other immigrants.

CRITICAL RULES:
1. You provide legal INFORMATION, not legal ADVICE. Always end with a recommendation to consult a qualified immigration attorney.
2. Cite specific cases by their CID (content identifier) when referencing them. Format: [Case CID: <cid>]
3. Identify which immigration categories may apply to the user's situation.
4. Describe what happened in similar cases — outcomes, timelines, documents used, strategies that worked.
5. Never guarantee outcomes. Immigration cases are highly fact-specific.
6. If the case library doesn't have directly relevant cases, say so honestly and provide general information about the applicable categories.
7. List documents typically needed for the identified case types.
8. Be compassionate. The person reading this may be scared, in legal jeopardy, and without resources.
9. Use plain language. Avoid legal jargon where possible. Explain terms when you must use them.

FORMAT YOUR RESPONSE AS:
## Applicable Immigration Categories
[List the most likely categories based on the user's situation]

## Similar Cases from the ImmiVault Library
[Summarize relevant cases with citations — [Case CID: <cid>] — outcomes, timelines, key factors]

## Typical Documents & Forms Needed
[Bullet list of relevant documents and USCIS/EOIR forms]

## Key Factors That Affect Outcomes
[Based on the cases, what seemed to make a difference]

## Recommended Next Steps
[Practical steps the person can take, ending with "Consult a qualified immigration attorney"]

---
DISCLAIMER: This platform provides legal information based on publicly shared anonymized case data. It is not a substitute for professional legal advice. Consult a qualified immigration attorney for your specific situation.`;

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

Based on the user's situation and the cases above, provide a comprehensive legal research summary. Cite specific cases by CID using the format [Case CID: <cid>]. Be compassionate and practical.`;

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
