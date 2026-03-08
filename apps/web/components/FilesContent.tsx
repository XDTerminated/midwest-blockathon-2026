"use client";

import { CASE_TYPES } from "@lumina/shared";
import { Loader2, Search, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { listAllFiles, type CaseListItem } from "@/lib/api";
import { useLanguage } from "@/lib/i18n";
import { cn, outcomeColor, outcomeLabel } from "@/lib/utils";

export function FilesContent() {
  const [files, setFiles] = useState<CaseListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    listAllFiles(200)
      .then((r) => setFiles(r.cases))
      .catch(() => setFiles([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return files;
    return files.filter((f) => {
      const typeLabel = CASE_TYPES.find((ct) => ct.value === f.caseType)?.label ?? f.caseType;
      return (
        f.name?.toLowerCase().includes(q) ||
        typeLabel.toLowerCase().includes(q) ||
        f.caseType?.toLowerCase().includes(q) ||
        f.countryOfOrigin?.toLowerCase().includes(q) ||
        f.court?.toLowerCase().includes(q)
      );
    });
  }, [files, search]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 text-[#D4AD5A] animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-semibold text-[#e8e8f0] mb-1">{t("allFiles")}</h1>
        <p className="text-sm text-[#6B7280]">
          {filtered.length} {t("filesStored")}
        </p>
      </div>

      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("searchByName")}
          className="w-full bg-[#1C2030] border border-[#363C4A] rounded-[14px] pl-11 pr-10 py-3 text-sm text-[#e8e8f0] placeholder-[#6B7280] focus:outline-none focus:border-[#D4AD5A] transition shadow-floating"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#e8e8f0] transition"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="bg-[#1C2030] rounded-[14px] border border-[#363C4A] shadow-surface overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_140px_120px_100px_80px_32px] gap-4 px-5 py-3 border-b border-[#363C4A] text-xs text-[#6B7280] uppercase tracking-wide">
            <span>Name</span>
            <span>Type</span>
            <span>Country</span>
            <span>Court</span>
            <span>Status</span>
            <span />
          </div>

          {/* Rows */}
          {filtered.map((item, i) => {
            const caseTypeLabel = CASE_TYPES.find((ct) => ct.value === item.caseType)?.label ?? item.caseType;
            return (
              <Link key={item.cid} href={`/case/${item.cid}`}>
                <div
                  className={cn(
                    "grid grid-cols-[1fr_140px_120px_100px_80px_32px] gap-4 px-5 py-4 items-center group hover:bg-[#242838] transition cursor-pointer animate-fade-in-up",
                    i !== filtered.length - 1 && "border-b border-[#363C4A]/50"
                  )}
                  style={{ animationDelay: `${Math.min(i * 0.02, 0.3)}s` }}
                >
                  {/* Name + year */}
                  <div className="min-w-0">
                    <p className="text-sm text-[#e8e8f0] truncate leading-snug">{item.name}</p>
                    {item.year && (
                      <span className="text-[11px] text-[#6B7280]">{item.year}</span>
                    )}
                  </div>

                  {/* Type */}
                  <span className="text-xs text-[#D4AD5A] font-medium truncate">
                    {caseTypeLabel}
                  </span>

                  {/* Country */}
                  <span className="text-xs text-[#9CA3AF] truncate">
                    {item.countryOfOrigin || "—"}
                  </span>

                  {/* Court */}
                  <span className="text-xs text-[#9CA3AF] truncate">
                    {item.court || "—"}
                  </span>

                  {/* Outcome */}
                  <span className={cn("text-[11px] font-semibold px-2 py-0.5 rounded-full text-center w-fit", outcomeColor(item.outcome as import("@lumina/shared").Outcome))}>
                    {outcomeLabel(item.outcome as import("@lumina/shared").Outcome)}
                  </span>

                  {/* Arrow */}
                  <ChevronRight className="w-4 h-4 text-[#363C4A] group-hover:text-[#D4AD5A] transition shrink-0" />
                </div>
              </Link>
            );
          })}
        </div>
      ) : search ? (
        <div className="text-center py-16">
          <p className="text-[#6B7280] text-sm">{t("noFilesMatch")} &ldquo;{search}&rdquo;</p>
          <button
            onClick={() => setSearch("")}
            className="mt-3 text-sm text-[#D4AD5A] hover:text-[#f0c860] transition"
          >
            {t("clearSearch")}
          </button>
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-[#6B7280] mb-4">{t("noFiles")}</p>
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 bg-[#D4AD5A] hover:bg-[#E0BD6A] text-[#121620] font-semibold px-6 py-3 rounded-xl transition"
          >
            {t("uploadFirstCase")}
          </Link>
        </div>
      )}
    </div>
  );
}
