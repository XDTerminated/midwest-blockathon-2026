"use client";

import ReactMarkdown from "react-markdown";
import type { SearchResult } from "@immivault/shared";
import { CitedCase } from "@/components/CitedCase";

interface AIAnalysisProps {
  result: SearchResult;
}

export function AIAnalysis({ result }: AIAnalysisProps) {
  return (
    <div className="bg-[#161A24] rounded-[14px] border border-[#2E323A] p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-[#2E323A] bg-[#0C0F18] border border-[#2E323A] px-2 py-1 rounded">
          ImmiVault AI · Legal Research
        </span>
      </div>

      {/* AI Analysis — markdown rendered */}
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
}

// Replace [Case CID: <cid>] patterns with CitedCase badges
function processCitations(
  content: React.ReactNode,
  citedCases: SearchResult["citedCases"]
): React.ReactNode {
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
}
