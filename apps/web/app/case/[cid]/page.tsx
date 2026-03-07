"use client";

import { CASE_TYPES, type CaseRecord } from "@immivault/shared";
import { ArrowLeft, BookOpen, Clock, Copy, FileText, Globe, Lightbulb, Loader2, Paperclip, Scale, Share2, Shield } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, use } from "react";

import { AppLayout } from "@/components/layout/AppLayout";
import { PaymentGate } from "@/components/PaymentGate";
import { getCase, presignCase, isPaymentRequired, translateTexts } from "@/lib/api";
import { useLanguage } from "@/lib/i18n";
import { outcomeColor, outcomeLabel, formatCID, cn } from "@/lib/utils";

type State = "loading" | "requires_payment" | "loaded" | "error";

interface CasePageProps {
  params: Promise<{ cid: string }>;
}

const CasePage = ({ params }: CasePageProps) => {
  const { cid } = use(params);
  const { t, language } = useLanguage();
  const [state, setState] = useState<State>("loading");
  const [caseData, setCaseData] = useState<(CaseRecord & { cid: string }) | null>(null);
  const [translated, setTranslated] = useState<Record<string, string>>({});
  const translationCache = useRef<Record<string, Record<string, string>>>({});
  const [error, setError] = useState<string | null>(null);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [sharing, setSharing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [translating, setTranslating] = useState(false);

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

  const lastTranslateRef = useRef(0);

  useEffect(() => {
    if (!caseData || language === "en") {
      setTranslated({});
      return;
    }
    const cacheKey = `${cid}:${language}`;
    if (translationCache.current[cacheKey]) {
      setTranslated(translationCache.current[cacheKey]);
      return;
    }
    const texts: Record<string, string> = {};
    if (caseData.narrative) texts.narrative = caseData.narrative;
    if (caseData.keyFactors) texts.keyFactors = caseData.keyFactors;
    if (caseData.lessonsLearned) texts.lessonsLearned = caseData.lessonsLearned;
    if (caseData.documentsUsed?.length) {
      caseData.documentsUsed.forEach((d, i) => { texts[`doc_${i}`] = d; });
    }
    if (Object.keys(texts).length === 0) return;
    const requestId = ++lastTranslateRef.current;
    setTranslating(true);
    translateTexts(texts, language)
      .then((result) => {
        if (lastTranslateRef.current !== requestId) return;
        translationCache.current[cacheKey] = result;
        setTranslated(result);
      })
      .catch(() => {})
      .finally(() => {
        if (lastTranslateRef.current === requestId) setTranslating(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caseData, language, cid]);

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
          <Loader2 className="w-8 h-8 animate-spin text-[#D4AD5A]" />
        </div>
      </AppLayout>
    );
  }

  if (state === "error") {
    return (
      <AppLayout>
        <div className="max-w-2xl mx-auto px-4 py-12 text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button onClick={() => loadCase()} className="text-[#D4AD5A] hover:underline text-sm">
            {t("tryAgain")}
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
            <h1 className="text-2xl font-bold text-[#e8e8f0] mb-2">{t("fullCaseAccess")}</h1>
            <p className="text-[#6B7280] text-sm">
              {t("casePaymentDesc")}
            </p>
          </div>
          <PaymentGate cid={cid} onPaymentSuccess={handlePaymentSuccess} />
        </div>
      </AppLayout>
    );
  }

  if (!caseData) return null;

  const caseTypeLabel = CASE_TYPES.find((ct) => ct.value === caseData.caseType)?.label ?? caseData.caseType ?? "File";
  const needsTranslation = language !== "en";
  const contentReady = !needsTranslation || !translating;

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-6 py-8 space-y-6 animate-fade-in">
        {/* Back link */}
        <Link href="/files" className="inline-flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-[#D4AD5A] transition">
          <ArrowLeft className="w-4 h-4" />
          {t("backToFiles")}
        </Link>

        {/* Header card */}
        <div className="bg-[#1C2030] rounded-[14px] border border-[#363C4A] p-6 shadow-surface">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-semibold text-[#D4AD5A] uppercase tracking-wide">
                {caseTypeLabel}
              </span>
              <h1 className="text-xl font-semibold text-[#e8e8f0] mt-1">
                {caseData.countryOfOrigin ? `${caseData.countryOfOrigin} · ${caseData.year}` : formatCID(caseData.cid)}
              </h1>
            </div>
            {caseData.outcome && (
              <span className={cn("text-xs font-semibold px-3 py-1 rounded-full shrink-0 mt-1", outcomeColor(caseData.outcome))}>
                {outcomeLabel(caseData.outcome)}
              </span>
            )}
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#9CA3AF]">
            {caseData.countryOfOrigin && (
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#6B7280]" />
                {caseData.countryOfOrigin}
              </span>
            )}
            {caseData.court && (
              <span className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-[#6B7280]" />
                {caseData.court}
              </span>
            )}
            {caseData.timelineMonths != null && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#6B7280]" />
                {caseData.timelineMonths} {t("months")}
              </span>
            )}
            {caseData.lawyerUsed != null && (
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#6B7280]" />
                {caseData.lawyerUsed ? t("hadAttorney") : t("proSe")}
              </span>
            )}
          </div>
        </div>

        {/* Translation loading bar */}
        {translating && (
          <div className="flex items-center justify-center gap-3 py-6 animate-fade-in">
            <Loader2 className="w-5 h-5 animate-spin text-[#D4AD5A]" />
            <span className="text-sm text-[#6B7280]">{t("translating") || "Translating..."}</span>
          </div>
        )}

        {/* Content sections — hidden until translation is ready */}
        {contentReady && (
          <>
            {/* Narrative */}
            {caseData.narrative && (
              <Section icon={<BookOpen className="w-4 h-4" />} title={t("caseNarrative")}>
                <p className="text-sm text-[#9CA3AF] leading-relaxed whitespace-pre-wrap">
                  {translated.narrative ?? caseData.narrative}
                </p>
              </Section>
            )}

            {/* Key Factors */}
            {caseData.keyFactors && (
              <Section icon={<FileText className="w-4 h-4" />} title={t("keyFactors")}>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {translated.keyFactors ?? caseData.keyFactors}
                </p>
              </Section>
            )}

            {/* Lessons Learned */}
            {caseData.lessonsLearned && (
              <Section icon={<Lightbulb className="w-4 h-4" />} title={t("lessonsLearned")}>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {translated.lessonsLearned ?? caseData.lessonsLearned}
                </p>
              </Section>
            )}

            {/* Documents & Forms */}
            {caseData.documentsUsed?.length > 0 && (
              <Section icon={<Paperclip className="w-4 h-4" />} title={t("documentsUsed")}>
                <div className="flex flex-wrap gap-2">
                  {caseData.documentsUsed.map((doc, i) => (
                    <span key={doc} className="bg-[#121620] border border-[#363C4A] text-[#9CA3AF] text-xs px-3 py-1.5 rounded-full">
                      {translated[`doc_${i}`] ?? doc}
                    </span>
                  ))}
                </div>
              </Section>
            )}
          </>
        )}

        {/* CID + Share */}
        <div className="bg-[#1C2030] rounded-[14px] border border-[#363C4A] p-5 shadow-surface space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs text-[#6B7280] uppercase tracking-wide mb-1">
                {t("contentId")}
              </p>
              <p className="font-mono text-xs text-[#D4AD5A] break-all">{caseData.cid}</p>
            </div>
            <Link
              href={`/verify/${caseData.cid}`}
              className="shrink-0 flex items-center gap-1.5 text-xs text-[#D4AD5A] hover:text-[#f0c860] transition bg-[#121620] border border-[#363C4A] px-3 py-1.5 rounded-lg"
            >
              <Shield className="w-3.5 h-3.5" />
              {t("verify")}
            </Link>
          </div>

          <div className="border-t border-[#363C4A] pt-4">
            <p className="text-xs text-[#6B7280] mb-2">{t("shareWithAttorney")}</p>
            {shareUrl ? (
              <div className="flex gap-2">
                <input
                  readOnly
                  value={shareUrl}
                  className="flex-1 text-xs border border-[#363C4A] bg-[#121620] text-[#9CA3AF] rounded-lg px-3 py-2 font-mono focus:outline-none"
                />
                <button
                  onClick={copyShareUrl}
                  className="text-xs flex items-center gap-1.5 bg-[#121620] text-[#D4AD5A] border border-[#363C4A] px-3 py-2 rounded-lg hover:border-[#D4AD5A] transition"
                >
                  {copied ? "Copied!" : <><Copy className="w-3 h-3" /> Copy</>}
                </button>
              </div>
            ) : (
              <button
                onClick={handleShare}
                disabled={sharing}
                className="text-xs flex items-center gap-1.5 text-[#D4AD5A] hover:text-[#f0c860] transition"
              >
                {sharing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Share2 className="w-3.5 h-3.5" />}
                {t("generateShareLink")}
              </button>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[#6B7280] text-xs py-2">
          {t("caseDisclaimer")}
        </p>
      </div>
    </AppLayout>
  );
};

const Section = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="bg-[#1C2030] rounded-[14px] border border-[#363C4A] p-5 shadow-surface">
    <div className="flex items-center gap-2 mb-3">
      <span className="text-[#D4AD5A]">{icon}</span>
      <h2 className="text-sm font-semibold text-[#e8e8f0]">{title}</h2>
    </div>
    {children}
  </div>
);

export default CasePage;
