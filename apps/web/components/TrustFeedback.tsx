"use client";

import type { CitedCaseRef } from "@immivault/shared";
import { ThumbsUp, Flag, Loader2 } from "lucide-react";
import { useState } from "react";

import { submitTrustVote } from "@/lib/api";

interface Props {
  citedCases: CitedCaseRef[];
}

export const TrustFeedback = ({ citedCases }: Props) => {
  const [voted, setVoted] = useState<Record<string, "approve" | "flag">>({});
  const [loading, setLoading] = useState<string | null>(null);

  if (!citedCases || citedCases.length === 0) return null;

  const handleVote = async (cid: string, voteType: "approve" | "flag") => {
    if (voted[cid] || loading) return;
    setLoading(cid);
    try {
      await submitTrustVote(cid, voteType);
      setVoted((prev) => ({ ...prev, [cid]: voteType }));
    } catch {
      // Silently fail — likely already voted or not logged in.
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="mt-3 border-t border-[#2E323A] pt-3">
      <p className="text-xs text-[#2E323A] mb-2">Were these cases trustworthy?</p>
      <div className="flex flex-wrap gap-2">
        {citedCases.map((c) => (
          <div
            key={c.cid}
            className="flex items-center gap-1.5 bg-[#161A24] border border-[#2E323A] rounded-lg px-2.5 py-1.5 text-xs"
          >
            <span className="text-[#8a8ea0] font-mono truncate max-w-[80px]">
              {c.cid.slice(0, 12)}...
            </span>
            {voted[c.cid] ? (
              <span className={voted[c.cid] === "approve" ? "text-green-400" : "text-red-400"}>
                {voted[c.cid] === "approve" ? "Approved" : "Flagged"}
              </span>
            ) : loading === c.cid ? (
              <Loader2 className="w-3 h-3 animate-spin text-[#2E323A]" />
            ) : (
              <>
                <button
                  onClick={() => handleVote(c.cid, "approve")}
                  className="text-[#2E323A] hover:text-green-400 transition p-0.5"
                  title="Trustworthy"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleVote(c.cid, "flag")}
                  className="text-[#2E323A] hover:text-red-400 transition p-0.5"
                  title="Flag as suspicious"
                >
                  <Flag className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
