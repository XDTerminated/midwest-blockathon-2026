import { eq, sql } from "drizzle-orm";

import { db } from "../db";
import { caseCredit, creditEvent, caseEscrow } from "../db/schema";

export const creditService = {
  async recordReference(cid: string, chatSessionId?: number) {
    // Find the contributor for this CID from escrow table.
    const escrows = await db.select().from(caseEscrow).where(eq(caseEscrow.cid, cid));
    if (escrows.length === 0) return; // No escrow record — skip.

    const contributorId = escrows[0].contributorId;

    // Upsert credit row.
    await db
      .insert(caseCredit)
      .values({ cid, contributorId, credits: 1, referenceCount: 1 })
      .onConflictDoUpdate({
        target: caseCredit.cid,
        set: {
          credits: sql`${caseCredit.credits} + 1`,
          referenceCount: sql`${caseCredit.referenceCount} + 1`,
        },
      });

    // Log event.
    await db.insert(creditEvent).values({ cid, contributorId, chatSessionId });
  },

  async getByContributor(contributorId: string) {
    return db.select().from(caseCredit).where(eq(caseCredit.contributorId, contributorId));
  },
};
