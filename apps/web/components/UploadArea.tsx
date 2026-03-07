"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { CaseUploadForm } from "@/components/CaseUploadForm";

const PAST_DOCS = [
  { id: 1, name: "Asylum Application (I-589)" },
  { id: 2, name: "Personal Declaration" },
  { id: 3, name: "Country Conditions Report" },
  { id: 4, name: "Supporting Evidence Package" },
];

export function UploadArea() {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <div className="flex flex-col gap-6">
        <button
          onClick={() => setShowForm(false)}
          className="text-[#2E323A] hover:text-[#e8e8f0] text-sm self-start transition"
        >
          ← Back
        </button>
        <div className="bg-[#161A24] border border-[#2E323A] rounded-[14px] p-6">
          <CaseUploadForm />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Drop zone */}
      <button
        onClick={() => setShowForm(true)}
        className="w-full border-2 border-dashed border-[#2E323A] hover:border-[#C9A54E] rounded-[14px] flex flex-col items-center justify-center gap-3 py-20 transition group cursor-pointer"
      >
        <div className="w-10 h-10 rounded-lg bg-[#161A24] border border-[#2E323A] group-hover:border-[#C9A54E] flex items-center justify-center transition">
          <Plus className="w-5 h-5 text-[#2E323A] group-hover:text-[#C9A54E] transition" />
        </div>
        <span className="text-[#2E323A] group-hover:text-[#e8e8f0] text-sm transition">
          Upload a File
        </span>
      </button>

      {/* Past Documents */}
      <div>
        <h2 className="text-sm font-medium text-[#e8e8f0] mb-3">Past Documents</h2>
        <div className="flex flex-col divide-y divide-[#2E323A] border border-[#2E323A] rounded-[14px] overflow-hidden">
          {PAST_DOCS.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center px-4 py-3 hover:bg-[#161A24] transition cursor-pointer"
            >
              <span className="text-sm text-[#2E323A] w-16 shrink-0">Name</span>
              <span className="text-sm text-[#e8e8f0]">{doc.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
