"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";
import { LEGAL_DISCLAIMER } from "@immivault/shared";
import { cn } from "@/lib/utils";

type Mode = "banner" | "inline" | "card";

interface DisclaimerProps {
  mode?: Mode;
  className?: string;
}

export function Disclaimer({ mode = "inline", className }: DisclaimerProps) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (mode === "banner") {
      setDismissed(sessionStorage.getItem("disclaimer-dismissed") === "true");
    }
  }, [mode]);

  if (mode === "banner" && dismissed) return null;

  const handleDismiss = () => {
    sessionStorage.setItem("disclaimer-dismissed", "true");
    setDismissed(true);
  };

  if (mode === "banner") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0f1500] border-t border-[#C9A54E] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#C9A54E] shrink-0 mt-0.5" />
          <p className="text-sm text-[#8a8ea0] flex-1">
            <strong className="text-[#C9A54E]">Not Legal Advice:</strong> {LEGAL_DISCLAIMER}
          </p>
          <button onClick={handleDismiss} className="text-[#2E323A] hover:text-[#e8e8f0] shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  if (mode === "card") {
    return (
      <div className={cn("bg-[#0f1500] border border-[#C9A54E] rounded-lg p-4", className)}>
        <div className="flex gap-3">
          <AlertTriangle className="w-5 h-5 text-[#C9A54E] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-[#C9A54E] text-sm">Important Legal Notice</p>
            <p className="text-sm text-[#8a8ea0] mt-1">{LEGAL_DISCLAIMER}</p>
          </div>
        </div>
      </div>
    );
  }

  // inline (default)
  return (
    <div className={cn("flex items-start gap-2 text-xs text-[#2E323A] bg-[#161A24] border border-[#2E323A] rounded px-3 py-2", className)}>
      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#C9A54E]" />
      <span>{LEGAL_DISCLAIMER}</span>
    </div>
  );
}
