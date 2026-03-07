"use client";

import type { SearchResult } from "@immivault/shared";
import { Volume2, Square } from "lucide-react";
import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";

import { CitedCase } from "@/components/CitedCase";

interface AIAnalysisProps {
  result: SearchResult;
}

export const AIAnalysis = ({ result }: AIAnalysisProps) => {
  const [speaking, setSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const toggleSpeak = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }

    const text = result.analysis.replace(/\[Case CID: [^\]]+\]/g, "");
    const utterance = new SpeechSynthesisUtterance(text);

    // Try to auto-detect language from the text for proper pronunciation.
    // The browser will use the appropriate voice if available.
    utterance.rate = 0.9;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  return (
    <div className="bg-[#161A24] rounded-[14px] border border-[#2E323A] p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-[#2E323A] bg-[#0C0F18] border border-[#2E323A] px-2 py-1 rounded">
          Lumina AI
        </span>
        <button
          onClick={toggleSpeak}
          className={`w-7 h-7 flex items-center justify-center rounded-md transition ${
            speaking
              ? "text-[#C9A54E] bg-[#C9A54E]/10"
              : "text-[#2E323A] hover:text-[#8a8ea0]"
          }`}
          title={speaking ? "Stop listening" : "Listen to response"}
        >
          {speaking ? <Square className="w-3.5 h-3.5" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* AI analysis — markdown rendered */}
      <div className="text-base text-[#c0c2d0] leading-loose space-y-4">
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="leading-loose">
                {processCitations(children as string, result.citedCases)}
              </p>
            ),
            h2: ({ children }) => (
              <h2 className="text-base font-semibold text-[#e8e8f0] mt-4 mb-1">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-sm font-semibold text-[#e8e8f0] mt-3 mb-1">{children}</h3>
            ),
            ul: ({ children }) => <ul className="list-disc pl-5 space-y-1">{children}</ul>,
            li: ({ children }) => <li className="text-sm">{children}</li>,
            strong: ({ children }) => <strong className="font-semibold text-[#e8e8f0]">{children}</strong>,
          }}
        >
          {result.analysis}
        </ReactMarkdown>
      </div>

      {/* Cited cases */}
      {result.citedCases.length > 0 && (
        <div className="mt-4 pt-4 border-t border-[#2E323A]">
          <p className="text-xs text-[#2E323A] uppercase tracking-wide mb-2">
            Cases Referenced
          </p>
          <div className="flex flex-wrap gap-2">
            {result.citedCases.map((ref_) => (
              <CitedCase key={ref_.cid} ref_={ref_} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

// Replace [Case CID: <cid>] patterns with CitedCase badges.
const processCitations = (
  content: React.ReactNode,
  citedCases: SearchResult["citedCases"]
): React.ReactNode => {
  if (typeof content !== "string") return content;

  const cidPattern = /\[Case CID: ([^\]]+)\]/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = cidPattern.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }
    const cid = match[1];
    const cited = citedCases.find((c) => c.cid === cid);
    if (cited) {
      parts.push(<CitedCase key={cid} ref_={cited} />);
    } else {
      parts.push(match[0]);
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts.length > 0 ? parts : content;
};
