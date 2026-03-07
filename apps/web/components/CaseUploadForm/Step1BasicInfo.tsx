"use client";

import { CASE_TYPES, OUTCOMES } from "@immivault/shared";

import type { FormData } from "./index";

interface Props {
  data: FormData;
  onChange: (d: Partial<FormData>) => void;
  onNext: () => void;
}

const inputClass =
  "w-full bg-[#0C0F18] border border-[#2E323A] text-[#e8e8f0] placeholder-[#2E323A] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#C9A54E] transition";

const labelClass = "block text-sm font-medium text-[#8a8ea0] mb-1";

export const Step1BasicInfo = ({ data, onChange, onNext }: Props) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 15 }, (_, i) => String(currentYear - i));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-semibold text-[#e8e8f0]">Basic Case Information</h2>
      <p className="text-[#2E323A] text-sm">Tell us the fundamental details of your immigration case.</p>

      <div>
        <label className={labelClass}>
          Case Type <span className="text-[#C9A54E]">*</span>
        </label>
        <select
          required
          value={data.caseType ?? ""}
          onChange={(e) => onChange({ caseType: e.target.value as FormData["caseType"] })}
          className={inputClass}
        >
          <option value="">Select case type...</option>
          {CASE_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>
          Country of Origin <span className="text-[#C9A54E]">*</span>
        </label>
        <input
          required
          type="text"
          value={data.countryOfOrigin ?? ""}
          onChange={(e) => onChange({ countryOfOrigin: e.target.value })}
          placeholder="e.g. Guatemala, India, Nigeria..."
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Outcome <span className="text-[#C9A54E]">*</span>
          </label>
          <select
            required
            value={data.outcome ?? ""}
            onChange={(e) => onChange({ outcome: e.target.value as FormData["outcome"] })}
            className={inputClass}
          >
            <option value="">Select outcome...</option>
            {OUTCOMES.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>
            Year <span className="text-[#C9A54E]">*</span>
          </label>
          <select
            required
            value={data.year ?? ""}
            onChange={(e) => onChange({ year: e.target.value })}
            className={inputClass}
          >
            <option value="">Select year...</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Court / USCIS Office (optional)</label>
        <input
          type="text"
          value={data.court ?? ""}
          onChange={(e) => onChange({ court: e.target.value })}
          placeholder="e.g. USCIS Vermont Service Center, Los Angeles Immigration Court"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Did you have legal representation?</label>
        <div className="flex gap-4">
          {["Yes", "No"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm text-[#8a8ea0]">
              <input
                type="radio"
                name="lawyerUsed"
                checked={data.lawyerUsed === (opt === "Yes")}
                onChange={() => onChange({ lawyerUsed: opt === "Yes" })}
                className="accent-[#C9A54E]"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end pt-2">
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
