"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUp, ArrowRight, Loader2 } from "lucide-react";

interface LandingSearchBarProps {
  defaultValue?: string;
  compact?: boolean;
}

export function LandingSearchBar({ defaultValue = "", compact = false }: LandingSearchBarProps) {
  const [query, setQuery] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Describe your situation..."
          className="flex-1 bg-[#161A24] border border-[#2E323A] text-[#e8e8f0] placeholder-[#2E323A] text-sm px-4 py-2.5 rounded-[14px] focus:outline-none focus:border-[#C9A54E] transition"
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="flex items-center gap-2 bg-[#C9A54E] hover:bg-[#d4a030] disabled:opacity-40 text-[#0C0F18] text-sm font-medium px-4 py-2.5 rounded-lg transition whitespace-nowrap"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
          Search Cases
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex items-center bg-[#161A24] border border-[#2E323A] rounded-[14px] overflow-hidden focus-within:border-[#C9A54E] transition">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Describe your situation in plain language..."
          className="flex-1 bg-transparent text-[#e8e8f0] placeholder-[#2E323A] text-base px-5 py-4 focus:outline-none"
          autoFocus
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="m-2 w-10 h-10 flex items-center justify-center bg-[#C9A54E] hover:bg-[#d4a030] disabled:opacity-40 text-[#0C0F18] rounded-lg transition shrink-0"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <ArrowUp className="w-4 h-4" />
          )}
        </button>
      </div>
    </form>
  );
}
