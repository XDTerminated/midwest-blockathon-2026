import { CASE_TYPES, type CaseListItem } from "@immivault/shared";
import { ArrowRight, Clock, Globe, Scale } from "lucide-react";
import Link from "next/link";

import { cn, outcomeColor, outcomeLabel } from "@/lib/utils";

interface CaseCardProps {
  item: CaseListItem;
  showLink?: boolean;
}

export const CaseCard = ({ item, showLink = true }: CaseCardProps) => {
  const caseTypeLabel =
    CASE_TYPES.find((t) => t.value === item.caseType)?.label ?? item.caseType;

  const card = (
    <div className="bg-[#1C2030] rounded-xl border border-[#363C4A] p-5 hover:border-[#4A5060] transition group shadow-surface hover-lift">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-xs font-medium text-[#D4AD5A] uppercase tracking-wide">
          {caseTypeLabel}
        </span>
        <span
          className={cn(
            "text-xs font-semibold px-2.5 py-1 rounded-full shrink-0",
            outcomeColor(item.outcome)
          )}
        >
          {outcomeLabel(item.outcome)}
        </span>
      </div>

      <div className="flex flex-wrap gap-3 text-sm text-[#9CA3AF]">
        <span className="flex items-center gap-1">
          <Globe className="w-3.5 h-3.5" />
          {item.countryOfOrigin}
        </span>
        {item.court && (
          <span className="flex items-center gap-1">
            <Scale className="w-3.5 h-3.5" />
            {item.court}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {item.year}
        </span>
      </div>

      {showLink && (
        <div className="mt-3 flex items-center gap-1 text-sm text-[#D4AD5A] font-medium group-hover:text-[#f0c860]">
          View Case (requires $0.10 USDC)
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      )}
    </div>
  );

  if (showLink) {
    return <Link href={`/case/${item.cid}`}>{card}</Link>;
  }

  return card;
};
