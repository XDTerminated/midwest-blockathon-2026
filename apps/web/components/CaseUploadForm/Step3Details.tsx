"use client";

import { COMMON_DOCUMENTS } from "@immivault/shared";
import { X } from "lucide-react";
import { useState } from "react";

import type { FormData } from "./index";

interface Props {
  data: FormData;
  onChange: (d: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const inputClass =
  "w-full bg-[#121620] border border-[#363C4A] text-[#e8e8f0] placeholder-[#6B7280] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#D4AD5A] transition";

const labelClass = "block text-sm font-medium text-[#9CA3AF] mb-1";

export const Step3Details = ({ data, onChange, onNext, onBack }: Props) => {
  const [customDoc, setCustomDoc] = useState("");
  const documents = data.documentsUsed ?? [];

  const toggleDocument = (doc: string) => {
    if (documents.includes(doc)) {
      onChange({ documentsUsed: documents.filter((d) => d !== doc) });
    } else {
      onChange({ documentsUsed: [...documents, doc] });
    }
  };

  const addCustomDoc = () => {
    if (customDoc.trim() && !documents.includes(customDoc.trim())) {
      onChange({ documentsUsed: [...documents, customDoc.trim()] });
      setCustomDoc("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-semibold text-[#e8e8f0]">Case Details</h2>
      <p className="text-[#6B7280] text-sm">
        Help others by sharing what documents you used and what made a difference.
      </p>

      {/* Documents. */}
      <div>
        <label className={labelClass}>
          Documents Used <span className="text-[#D4AD5A]">*</span>
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {COMMON_DOCUMENTS.map((doc) => (
            <button
              key={doc}
              type="button"
              onClick={() => toggleDocument(doc)}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${
                documents.includes(doc)
                  ? "bg-[#D4AD5A] text-white border-[#D4AD5A]"
                  : "bg-transparent text-[#6B7280] border-[#363C4A] hover:border-[#D4AD5A] hover:text-[#e8e8f0]"
              }`}
            >
              {doc}
            </button>
          ))}
        </div>
        {/* Custom document input. */}
        <div className="flex gap-2">
          <input
            type="text"
            value={customDoc}
            onChange={(e) => setCustomDoc(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addCustomDoc())}
            placeholder="Add other document..."
            className="flex-1 bg-[#121620] border border-[#363C4A] text-[#e8e8f0] placeholder-[#6B7280] rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-[#D4AD5A] transition"
          />
          <button
            type="button"
            onClick={addCustomDoc}
            className="text-sm border border-[#363C4A] text-[#6B7280] px-3 py-1.5 rounded-lg hover:border-[#D4AD5A] hover:text-[#e8e8f0] transition"
          >
            Add
          </button>
        </div>
        {documents.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {documents.map((doc) => (
              <span
                key={doc}
                className="inline-flex items-center gap-1 bg-[#0f1a0f] border border-[#D4AD5A] text-[#D4AD5A] text-xs px-2 py-1 rounded-full"
              >
                {doc}
                <button type="button" onClick={() => toggleDocument(doc)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Timeline. */}
      <div>
        <label className={labelClass}>
          Timeline (months from filing to decision) <span className="text-[#D4AD5A]">*</span>
        </label>
        <input
          required
          type="number"
          min="1"
          max="240"
          value={data.timelineMonths ?? ""}
          onChange={(e) => onChange({ timelineMonths: Number(e.target.value) })}
          placeholder="e.g. 18"
          className={inputClass}
        />
      </div>

      {/* Key Factors. */}
      <div>
        <label className={labelClass}>
          Key Factors <span className="text-[#D4AD5A]">*</span>
        </label>
        <textarea
          required
          minLength={20}
          rows={3}
          value={data.keyFactors ?? ""}
          onChange={(e) => onChange({ keyFactors: e.target.value })}
          placeholder="What do you think made the biggest difference in your case? What was most persuasive?"
          className="w-full bg-[#121620] border border-[#363C4A] text-[#e8e8f0] placeholder-[#6B7280] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#D4AD5A] transition resize-none"
        />
      </div>

      {/* Lessons Learned. */}
      <div>
        <label className={labelClass}>
          Lessons Learned <span className="text-[#D4AD5A]">*</span>
        </label>
        <textarea
          required
          minLength={20}
          rows={3}
          value={data.lessonsLearned ?? ""}
          onChange={(e) => onChange({ lessonsLearned: e.target.value })}
          placeholder="What advice would you give to someone in a similar situation? What do you wish you had known?"
          className="w-full bg-[#121620] border border-[#363C4A] text-[#e8e8f0] placeholder-[#6B7280] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#D4AD5A] transition resize-none"
        />
      </div>

      <div className="flex justify-between pt-2">
        <button type="button" onClick={onBack} className="text-[#6B7280] hover:text-[#e8e8f0] text-sm px-4 py-2 transition">
          ← Back
        </button>
        <button
          type="submit"
          disabled={documents.length === 0}
          className="bg-[#D4AD5A] hover:bg-[#E0BD6A] disabled:opacity-50 text-white px-6 py-2 rounded-lg text-sm font-semibold transition"
        >
          Continue →
        </button>
      </div>
    </form>
  );
};
