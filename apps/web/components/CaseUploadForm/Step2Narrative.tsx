"use client";

import { AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

import type { FormData } from "./index";

interface Props {
  data: FormData;
  onChange: (d: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

// Simple PII detection patterns (mirrors the API-side logic).
const PII_PATTERNS = [
  /\bA[-\s]?\d{8,9}\b/gi,           // A-numbers
  /\b\d{3}-\d{2}-\d{4}\b/g,          // SSNs
  /\b(\+1[-.\s]?)?\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}\b/g, // phones
  /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}\b/gi,   // emails
];

const hasPII = (text: string): boolean => {
  return PII_PATTERNS.some((p) => {
    p.lastIndex = 0;
    return p.test(text);
  });
};

export const Step2Narrative = ({ data, onChange, onNext, onBack }: Props) => {
  const [piiWarning, setPiiWarning] = useState(false);
  const narrative = data.narrative ?? "";

  useEffect(() => {
    setPiiWarning(hasPII(narrative));
  }, [narrative]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-semibold text-[#e8e8f0]">Your Case Story</h2>
      <p className="text-[#2E323A] text-sm">
        Describe your case in your own words.{" "}
        <strong className="text-[#8a8ea0]">Do not include real names, A-numbers, SSNs,
        phone numbers, or addresses.</strong>{" "}
        Our system will also automatically redact PII before saving.
      </p>

      {piiWarning && (
        <div className="flex items-start gap-2 bg-[#1a1500] border border-[#C9A54E] rounded-lg p-3 text-sm text-[#C9A54E]">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-[#C9A54E]" />
          <div>
            <strong>Possible PII detected.</strong> Your narrative may contain personal identifiers
            (A-numbers, SSNs, phone numbers, or emails). These will be automatically redacted before
            saving, but please review before submitting.
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-[#8a8ea0] mb-1">
          Case Narrative <span className="text-[#C9A54E]">*</span>
          <span className="text-[#2E323A] font-normal ml-2">({narrative.length}/5000 characters)</span>
        </label>
        <textarea
          required
          minLength={50}
          maxLength={5000}
          rows={12}
          value={narrative}
          onChange={(e) => onChange({ narrative: e.target.value })}
          placeholder="Describe your situation: when you arrived, what type of case you had, what happened at each stage, how long it took, what the outcome was, and what you wish you had known..."
          className="w-full bg-[#0C0F18] border border-[#2E323A] text-[#e8e8f0] placeholder-[#2E323A] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#C9A54E] transition resize-none"
        />
        <p className="text-xs text-[#2E323A] mt-1">Minimum 50 characters. Be as detailed as you're comfortable sharing.</p>
      </div>

      <div className="flex justify-between pt-2">
        <button
          type="button"
          onClick={onBack}
          className="text-[#2E323A] hover:text-[#e8e8f0] text-sm px-4 py-2 transition"
        >
          ← Back
        </button>
        <button
          type="submit"
          className="bg-[#C9A54E] hover:bg-[#d4a030] text-white px-6 py-2 rounded-lg text-sm font-semibold transition"
        >
          Continue →
        </button>
      </div>
    </form>
  );
};
