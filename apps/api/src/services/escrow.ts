import { eq, and, lt, sql } from "drizzle-orm";

import { db } from "../db";
import { caseEscrow, trustVote } from "../db/schema";
import type { EscrowStatus, TrustVoteType } from "@lumina/shared";

const REQUIRED_APPROVALS = 2;
const REQUIRED_FLAGS = 2;
const AUTO_RELEASE_SECONDS = 120; // 2 minutes

export const escrowService = {
  async create(
    cid: string,
    cidHash: string,
    contributorId: string,
    contributorWallet: string,
    stakeTxHash: string | null,
  ) {
    const [row] = await db
      .insert(caseEscrow)
      .values({ cid, cidHash, contributorId, contributorWallet, stakeTxHash })
      .returning();
    return row;
  },

  async getByCid(cid: string) {
    const rows = await db.select().from(caseEscrow).where(eq(caseEscrow.cid, cid));
    return rows[0] ?? null;
  },

  async getByContributor(contributorId: string) {
    return db.select().from(caseEscrow).where(eq(caseEscrow.contributorId, contributorId));
  },

  async processVote(cid: string, voterId: string, voteType: TrustVoteType) {
    // Check for duplicate vote.
    const existing = await db
      .select()
      .from(trustVote)
      .where(and(eq(trustVote.cid, cid), eq(trustVote.voterId, voterId)));
    if (existing.length > 0) {
      return { error: "Already voted" };
    }

    // Insert vote.
    await db.insert(trustVote).values({ cid, voterId, voteType });

    // Update counts on escrow.
    const col = voteType === "approve" ? caseEscrow.approvalCount : caseEscrow.flagCount;
    await db
      .update(caseEscrow)
      .set({ [voteType === "approve" ? "approvalCount" : "flagCount"]: sql`${col} + 1` })
      .where(eq(caseEscrow.cid, cid));

    // Check thresholds.
    const escrow = await this.getByCid(cid);
    if (!escrow || escrow.status !== "pending") return { ok: true };

    if (escrow.approvalCount >= REQUIRED_APPROVALS) {
      await this.release(cid);
      return { ok: true, newStatus: "released" as EscrowStatus };
    }
    if (escrow.flagCount >= REQUIRED_FLAGS) {
      await this.slash(cid);
      return { ok: true, newStatus: "slashed" as EscrowStatus };
    }

    return { ok: true };
  },

  async release(cid: string) {
    await db
      .update(caseEscrow)
      .set({ status: "released", releasedAt: new Date() })
      .where(eq(caseEscrow.cid, cid));
  },

  async slash(cid: string) {
    await db
      .update(caseEscrow)
      .set({ status: "slashed", releasedAt: new Date() })
      .where(eq(caseEscrow.cid, cid));
  },

  async checkAutoRelease() {
    const cutoff = new Date(Date.now() - AUTO_RELEASE_SECONDS * 1000);
    const pending = await db
      .select()
      .from(caseEscrow)
      .where(and(eq(caseEscrow.status, "pending"), lt(caseEscrow.stakedAt, cutoff)));

    for (const row of pending) {
      await this.release(row.cid);
      console.log(`Auto-released escrow for CID ${row.cid}`);
    }
    return pending.length;
  },

  async getVoteSummary(cid: string, userId: string | null) {
    const escrow = await this.getByCid(cid);
    if (!escrow) return null;

    let userHasVoted = false;
    let userVoteType: TrustVoteType | undefined;

    if (userId) {
      const votes = await db
        .select()
        .from(trustVote)
        .where(and(eq(trustVote.cid, cid), eq(trustVote.voterId, userId)));
      if (votes.length > 0) {
        userHasVoted = true;
        userVoteType = votes[0].voteType as TrustVoteType;
      }
    }

    return {
      approvalCount: escrow.approvalCount,
      flagCount: escrow.flagCount,
      userHasVoted,
      userVoteType,
    };
  },
};
