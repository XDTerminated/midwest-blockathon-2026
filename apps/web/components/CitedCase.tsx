import { CASE_TYPES, type CitedCaseRef } from "@immivault/shared";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { cn, formatCID, outcomeColor, outcomeLabel } from "@/lib/utils";

interface CitedCaseProps {
  ref_: CitedCaseRef;
}

export const CitedCase = ({ ref_ }: CitedCaseProps) => {
  const typeLabel = CASE_TYPES.find((t) => t.value === ref_.type)?.label ?? ref_.type;

  return (
    <Link
      href={`/case/${ref_.cid}`}
      className="inline-flex items-center gap-1.5 bg-[#121620] hover:bg-[#1E2433] border border-[#363C4A] rounded-md px-2 py-1 text-xs font-medium text-[#9CA3AF] mx-0.5 shadow-surface hover-lift"
    >
      <span className="text-[#D4AD5A]">{typeLabel}</span>
      {ref_.country && <span className="text-[#6B7280]">· {ref_.country}</span>}
      <span className={cn("px-1.5 py-0.5 rounded-full text-[10px]", outcomeColor(ref_.outcome))}>
        {outcomeLabel(ref_.outcome)}
      </span>
      <span className="text-[#6B7280] font-mono text-[10px]">{formatCID(ref_.cid, 4)}</span>
      <ExternalLink className="w-3 h-3 text-[#6B7280]" />
    </Link>
  );
};
