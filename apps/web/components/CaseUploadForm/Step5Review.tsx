"use client";

import { CASE_TYPES, OUTCOMES } from "@immivault/shared";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

import { Disclaimer } from "@/components/Disclaimer";
import { uploadCase } from "@/lib/api";
import type { FormData } from "./index";

interface Props {
  data: FormData;
  onBack: () => void;
  onSubmitted: (cid: string) => void;
}

export const Step5Review = ({ data, onBack, onSubmitted }: Props) => {
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const caseTypeLabel = CASE_TYPES.find((t) => t.value === data.caseType)?.label ?? data.caseType;
  const outcomeLabel = OUTCOMES.find((o) => o.value === data.outcome)?.label ?? data.outcome;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    setLoading(true);
    setError(null);

    try {
      const result = await uploadCase({
        ...data,
        documentsUsed: data.documentsUsed ?? [],
        formsUsed: data.formsUsed ?? [],
        lawyerUsed: data.lawyerUsed ?? false,
        contributorWallet: data.contributorWallet ?? "",
      });
      onSubmitted(result.cid);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-semibold text-[#e8e8f0]">Review & Submit</h2>
      <p className="text-[#6B7280] text-sm">
        Please review your case before submitting. PII will be automatically redacted.
      </p>

      {/* Review summary. */}
      <div className="bg-[#1C2030] rounded-lg border border-[#363C4A] divide-y divide-[#363C4A]">
        {[
          { label: "Case Type", value: caseTypeLabel },
          { label: "Country", value: data.countryOfOrigin },
          { label: "Outcome", value: outcomeLabel },
          { label: "Year", value: data.year },
          { label: "Court/Office", value: data.court || "Not specified" },
          { label: "Had Attorney", value: data.lawyerUsed ? "Yes" : "No" },
          { label: "Timeline", value: data.timelineMonths ? `${data.timelineMonths} months` : "—" },
          { label: "Documents", value: data.documentsUsed?.join(", ") || "None selected" },
          {
            label: "Earnings Wallet",
            value: data.contributorWallet
              ? `${data.contributorWallet.slice(0, 6)}...${data.contributorWallet.slice(-4)}`
              : "Anonymous (no earnings)",
          },
        ].map(({ label, value }) => (
          <div key={label} className="flex gap-3 px-4 py-3 text-sm">
            <span className="text-[#6B7280] w-32 shrink-0">{label}</span>
            <span className="text-[#e8e8f0] font-medium">{value}</span>
          </div>
        ))}
      </div>

      {/* Narrative preview. */}
      <div>
        <p className="text-sm font-medium text-[#9CA3AF] mb-1">Narrative Preview</p>
        <div className="bg-[#121620] border border-[#363C4A] rounded-lg p-3 text-sm text-[#9CA3AF] max-h-32 overflow-y-auto">
          {data.narrative ?? "—"}
        </div>
      </div>

      <Disclaimer mode="card" />

      {error && (
        <div className="bg-[#2a1010] border border-[#3a2020] text-red-400 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      {/* Consent. */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-[#D4AD5A]"
        />
        <span className="text-sm text-[#9CA3AF]">
          I confirm that this case is anonymized and does not contain personally identifiable
          information. I consent to this anonymized case being searchable by others on ImmiVault.
          I understand that contributors earn USDC micropayments when their cases help others.
        </span>
      </label>

      <div className="flex justify-between pt-2">
        <button type="button" onClick={onBack} className="text-[#6B7280] hover:text-[#e8e8f0] text-sm px-4 py-2 transition" disabled={loading}>
          ← Back
        </button>
        <button
          type="submit"
          disabled={!consent || loading}
          className="bg-[#D4AD5A] hover:bg-[#E0BD6A] disabled:opacity-50 text-white px-6 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4" />
              Submit Case
            </>
          )}
        </button>
      </div>
    </form>
  );
};
