"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Loader2 } from "lucide-react";

interface SearchBarProps {
  defaultValue?: string;
  variant?: "hero" | "compact";
}

export function SearchBar({ defaultValue = "", variant = "hero" }: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search immigration cases..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 disabled:opacity-50 transition flex items-center gap-2 text-sm"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
          Search
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Describe your situation in plain language..."
          className="flex-1 px-5 py-4 text-gray-900 text-lg focus:outline-none placeholder-gray-400"
          autoFocus
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="bg-blue-700 text-white px-6 py-4 hover:bg-blue-800 disabled:opacity-50 transition flex items-center gap-2 font-semibold whitespace-nowrap"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
          Search
        </button>
      </div>
    </form>
  );
}
