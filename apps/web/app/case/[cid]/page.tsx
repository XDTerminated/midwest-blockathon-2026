"use client";

import type { CaseRecord } from "@immivault/shared";
import { CASE_TYPES } from "@immivault/shared";
import { Shield, Clock, Globe, Scale, Loader2, Share2, Copy } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, use } from "react";

import { Disclaimer } from "@/components/Disclaimer";
import { AppLayout } from "@/components/layout/AppLayout";
import { PaymentGate } from "@/components/PaymentGate";
import { getCase, presignCase, isPaymentRequired } from "@/lib/api";
import { outcomeColor, outcomeLabel, formatCID, cn } from "@/lib/utils";

type State = "loading" | "requires_payment" | "loaded" | "error";

interface CasePageProps {
  params: Promise<{ cid: string }>;
}

const CasePage = ({ params }: CasePageProps) => {
  const { cid } = use(params);
  const [state, setState] = useState<State>("loading");
  const [caseData, setCaseData] = useState<(CaseRecord & { cid: string }) | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [sharing, setSharing] = useState(false);
  const [copied, setCopied] = useState(false);

  const loadCase = async (paymentProof?: string) => {
    setState("loading");
    try {
      const result = await getCase(cid, paymentProof);
      if (isPaymentRequired(result)) {
        setState("requires_payment");
      } else {
        setCaseData(result as CaseRecord & { cid: string });
        setState("loaded");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load case");
      setState("error");
    }
  };

  useEffect(() => {
    loadCase();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid]);

  const handlePaymentSuccess = async (txHash: string) => {
    await loadCase(txHash);
  };

  const handleShare = async () => {
    setSharing(true);
    try {
      const result = await presignCase(cid, 1440);
      setShareUrl(result.url);
    } catch {
      // Ignore.
    } finally {
      setSharing(false);
    }
  };

  const copyShareUrl = () => {
    if (shareUrl) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (state === "loading") {
    return (
      <AppLayout>
        <div className="flex items-center justify-center py-24">
          <Loader2 className="w-8 h-8 animate-spin text-[#C9A54E]" />
        </div>
      </AppLayout>
    );
  }

  if (state === "error") {
    return (
      <AppLayout>
        <div className="max-w-2xl mx-auto px-4 py-12 text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button onClick={() => loadCase()} className="text-[#C9A54E] hover:underline text-sm">
            Try again
          </button>
        </div>
      </AppLayout>
    );
  }

  if (state === "requires_payment") {
    return (
      <AppLayout>
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#e8e8f0] mb-2">Full Case Access</h1>
            <p className="text-[#2E323A] text-sm">
              This case is available for a small micropayment that goes directly to the contributor.
            </p>
          </div>
          <PaymentGate cid={cid} onPaymentSuccess={handlePaymentSuccess} />
          <div className="mt-6 text-center">
            <Disclaimer mode="inline" />
          </div>
        </div>
      </AppLayout>
    );
  }

  if (!caseData) return null;

  const caseTypeLabel = CASE_TYPES.find((t) => t.value === caseData.caseType)?.label ?? caseData.caseType ?? "File";
  const isStructuredCase = !!caseData.narrative;

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header. */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-semibold text-[#C9A54E] uppercase tracking-wide">
              {caseTypeLabel}
            </span>
            <h1 className="text-2xl font-bold text-[#e8e8f0] mt-1">
              {caseData.countryOfOrigin ? `${caseData.countryOfOrigin} · ${caseData.year}` : formatCID(caseData.cid)}
            </h1>
          </div>
          {caseData.outcome && (
            <span className={cn("text-sm font-semibold px-3 py-1 rounded-full shrink-0", outcomeColor(caseData.outcome))}>
              {outcomeLabel(caseData.outcome)}
            </span>
          )}
        </div>

        {/* Meta — only for structured cases. */}
        {isStructuredCase && (
          <div className="flex flex-wrap gap-4 text-sm text-[#2E323A] mb-6 pb-6 border-b border-[#2E323A]">
            {caseData.countryOfOrigin && <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" />{caseData.countryOfOrigin}</span>}
            {caseData.court && <span className="flex items-center gap-1.5"><Scale className="w-4 h-4" />{caseData.court}</span>}
            {caseData.timelineMonths && <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{caseData.timelineMonths} months</span>}
            {caseData.lawyerUsed != null && (
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                {caseData.lawyerUsed ? "Had attorney" : "Pro se (no attorney)"}
              </span>
            )}
          </div>
        )}

        <Disclaimer mode="card" className="mb-6" />

        {/* Narrative. */}
        {caseData.narrative && (
          <section className="mb-6">
            <h2 className="text-base font-semibold text-[#e8e8f0] mb-3">Case Narrative</h2>
            <div className="bg-[#161A24] border border-[#2E323A] rounded-lg p-5 text-[#8a8ea0] text-sm leading-relaxed whitespace-pre-wrap">
              {caseData.narrative}
            </div>
          </section>
        )}

        {/* Key Factors. */}
        {caseData.keyFactors && (
          <section className="mb-6">
            <h2 className="text-base font-semibold text-[#e8e8f0] mb-3">Key Factors</h2>
            <div className="bg-[#161A24] border border-[#2E323A] rounded-lg p-4 text-sm text-[#8a8ea0]">
              {caseData.keyFactors}
            </div>
          </section>
        )}

        {/* Lessons Learned. */}
        {caseData.lessonsLearned && (
          <section className="mb-6">
            <h2 className="text-base font-semibold text-[#e8e8f0] mb-3">Lessons Learned</h2>
            <div className="bg-[#0f1a0f] border border-[#0f2a0f] rounded-lg p-4 text-sm text-green-300">
              {caseData.lessonsLearned}
            </div>
          </section>
        )}

        {/* Documents Used. */}
        {caseData.documentsUsed?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-base font-semibold text-[#e8e8f0] mb-3">Documents & Forms Used</h2>
            <div className="flex flex-wrap gap-2">
              {caseData.documentsUsed.map((doc) => (
                <span key={doc} className="bg-[#161A24] border border-[#2E323A] text-[#8a8ea0] text-xs px-3 py-1.5 rounded-full">
                  {doc}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* CID + Share. */}
        <div className="bg-[#161A24] border border-[#2E323A] rounded-lg p-4 mt-8">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div>
              <p className="text-xs font-semibold text-[#2E323A] uppercase tracking-wide mb-1">
                Content ID (CID) — Tamper-Proof
              </p>
              <p className="font-mono text-xs text-[#C9A54E] break-all">{caseData.cid}</p>
            </div>
            <Link
              href={`/verify/${caseData.cid}`}
              className="shrink-0 flex items-center gap-1 text-xs text-[#C9A54E] hover:underline"
            >
              <Shield className="w-3.5 h-3.5" />
              Verify
            </Link>
          </div>

          {/* Attorney share. */}
          <div className="border-t border-[#2E323A] pt-3">
            <p className="text-xs text-[#2E323A] mb-2">Share with your attorney (link expires in 24 hours)</p>
            {shareUrl ? (
              <div className="flex gap-2">
                <input
                  readOnly
                  value={shareUrl}
                  className="flex-1 text-xs border border-[#2E323A] bg-[#0C0F18] text-[#8a8ea0] rounded px-2 py-1.5 font-mono"
                />
                <button
                  onClick={copyShareUrl}
                  className="text-xs flex items-center gap-1 bg-[#161A24] text-[#C9A54E] border border-[#2E323A] px-3 py-1.5 rounded hover:border-[#C9A54E] transition"
                >
                  {copied ? "Copied!" : <><Copy className="w-3 h-3" /> Copy</>}
                </button>
              </div>
            ) : (
              <button
                onClick={handleShare}
                disabled={sharing}
                className="text-xs flex items-center gap-1.5 text-[#C9A54E] hover:text-[#e8e8f0] transition"
              >
                {sharing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Share2 className="w-3.5 h-3.5" />}
                Generate Attorney Share Link
              </button>
            )}
          </div>
        </div>

        <Disclaimer mode="inline" className="mt-6" />
      </div>
    </AppLayout>
  );
};

export default CasePage;
