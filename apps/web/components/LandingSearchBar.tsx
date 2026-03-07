"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUp, Loader2 } from "lucide-react";

export function LandingSearchBar() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex items-center bg-[#161A24] border border-[#2E323A] rounded-[14px] overflow-hidden focus-within:border-[#C9A54E] transition">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="I'm from Guatemala. I've been in the US for 8 years. I just got a notice to appear. What are my options?"
          className="flex-1 bg-transparent text-[#e8e8f0] placeholder-[#2E323A] text-base px-5 py-4 focus:outline-none"
          autoFocus
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="group m-2 w-10 h-10 hover:w-auto hover:px-4 flex items-center justify-center bg-[#C9A54E] hover:bg-[#d4a030] disabled:opacity-40 text-[#0C0F18] rounded-lg transition-all duration-300 shrink-0 overflow-hidden"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <ArrowUp className="w-4 h-4 shrink-0 transition-all duration-300 group-hover:w-0 group-hover:opacity-0" />
              <span className="max-w-0 overflow-hidden group-hover:max-w-32 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-medium whitespace-nowrap">Search Cases</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
