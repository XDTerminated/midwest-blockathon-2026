"use client";

import { ArrowUp, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LandingSearchBar = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex items-center bg-[#1C2030] border border-[#363C4A] rounded-[14px] overflow-hidden focus-within:border-[#D4AD5A] transition">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="I'm from Guatemala. I've been in the US for 8 years. I just got a notice to appear. What are my options?"
          className="flex-1 bg-transparent text-[#e8e8f0] placeholder-[#6B7280] text-base px-5 py-4 focus:outline-none"
          autoFocus
        />
        <button
          type="submit"
          disabled={loading}
          className="group m-2 w-10 h-10 hover:w-40 hover:px-4 flex items-center justify-center bg-[#D4AD5A] disabled:opacity-40 text-[#121620] rounded-lg shrink-0 cursor-pointer overflow-hidden transition-all duration-300"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <ArrowUp className="w-4 h-4 shrink-0 transition-all duration-300 group-hover:mr-2" />
              <span className="w-0 overflow-hidden group-hover:w-auto transition-all duration-300 text-sm font-medium whitespace-nowrap">Search Cases</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
