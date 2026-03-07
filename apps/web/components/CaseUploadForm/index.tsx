"use client";

import type { CaseRecord } from "@immivault/shared";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

import { Step1BasicInfo } from "./Step1BasicInfo";
import { Step2Narrative } from "./Step2Narrative";
import { Step3Details } from "./Step3Details";
import { Step4Wallet } from "./Step4Wallet";
import { Step5Review } from "./Step5Review";

export type FormData = Partial<CaseRecord> & { contributorWallet?: string };

const STEPS = [
  "Basic Info",
  "Your Story",
  "Details",
  "Earnings Wallet",
  "Review & Submit",
];

export const CaseUploadForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [submitted, setSubmitted] = useState<{ cid: string } | null>(null);

  const updateData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const next = () => {
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => {
    setStep((s) => Math.max(s - 1, 0));
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center mb-4">
          <div className="bg-[#0f1a0f] border border-green-800 rounded-full p-4">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#e8e8f0] mb-2">Case Uploaded!</h2>
        <p className="text-[#2E323A] mb-4">
          Your anonymized case has been stored on Pinata Private IPFS.
        </p>
        <div className="bg-[#161A24] border border-[#2E323A] rounded-[14px] p-4 max-w-sm mx-auto mb-6">
          <p className="text-xs text-[#2E323A] mb-1">Content ID (CID)</p>
          <p className="font-mono text-sm text-[#C9A54E] break-all">{submitted.cid}</p>
        </div>
        <div className="flex justify-center gap-3">
          <a
            href={`/verify/${submitted.cid}`}
            className="text-sm text-[#C9A54E] hover:underline"
          >
            Verify Case Integrity →
          </a>
          <span className="text-[#2E323A]">|</span>
          <button
            onClick={() => {
              setSubmitted(null);
              setFormData({});
              setStep(0);
            }}
            className="text-sm text-[#2E323A] hover:text-[#e8e8f0]"
          >
            Upload Another Case
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress steps */}
      <div className="flex items-center gap-0 mb-8">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  i < step
                    ? "bg-[#C9A54E] text-[#0C0F18]"
                    : i === step
                    ? "bg-[#C9A54E] text-[#0C0F18]"
                    : "bg-[#161A24] text-[#2E323A]"
                }`}
              >
                {i < step ? "✓" : i + 1}
              </div>
              <span className={`text-xs mt-1 whitespace-nowrap hidden sm:block ${i <= step ? "text-[#e8e8f0]" : "text-[#2E323A]"}`}>
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 ${i < step ? "bg-[#C9A54E]" : "bg-[#161A24]"}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      {step === 0 && (
        <Step1BasicInfo data={formData} onChange={updateData} onNext={next} />
      )}
      {step === 1 && (
        <Step2Narrative data={formData} onChange={updateData} onNext={next} onBack={back} />
      )}
      {step === 2 && (
        <Step3Details data={formData} onChange={updateData} onNext={next} onBack={back} />
      )}
      {step === 3 && (
        <Step4Wallet data={formData} onChange={updateData} onNext={next} onBack={back} />
      )}
      {step === 4 && (
        <Step5Review
          data={formData}
          onBack={back}
          onSubmitted={(cid) => setSubmitted({ cid })}
        />
      )}
    </div>
  );
};
