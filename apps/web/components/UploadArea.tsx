"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { CaseUploadForm } from "@/components/CaseUploadForm";

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

    </div>
  );
}
