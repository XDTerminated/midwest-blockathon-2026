import type { CitedCaseRef } from "@immivault/shared";
import { CASE_TYPES } from "@immivault/shared";
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
      className="inline-flex items-center gap-1.5 bg-[#0C0F18] hover:bg-[#1a1e28] border border-[#2E323A] rounded-md px-2 py-1 text-xs font-medium text-[#8a8ea0] transition mx-0.5"
    >
      <span className="text-[#C9A54E]">{typeLabel}</span>
      {ref_.country && <span className="text-[#2E323A]">· {ref_.country}</span>}
      <span className={cn("px-1.5 py-0.5 rounded-full text-[10px]", outcomeColor(ref_.outcome))}>
        {outcomeLabel(ref_.outcome)}
      </span>
      <span className="text-[#2E323A] font-mono text-[10px]">{formatCID(ref_.cid, 4)}</span>
      <ExternalLink className="w-3 h-3 text-[#2E323A]" />
    </Link>
  );
};
