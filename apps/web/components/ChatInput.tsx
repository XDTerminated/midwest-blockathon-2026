"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Send, Loader2 } from "lucide-react";

interface ChatInputProps {
  defaultValue?: string;
  onSend?: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ defaultValue = "", onSend, disabled }: ChatInputProps) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim() || disabled) return;
    const q = query.trim();
    setQuery("");
    if (onSend) {
      onSend(q);
    } else {
      router.push(`/search?q=${encodeURIComponent(q)}`);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-0 bg-[#161A24] border border-[#2E323A] rounded-[14px] px-4 py-3"
    >
      <button
        type="button"
        className="w-8 h-8 shrink-0 flex items-center justify-center text-[#2E323A] hover:text-[#5a5a70] transition mr-3"
      >
        <Plus className="w-5 h-5" />
      </button>

      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Describe your situation..."
        rows={1}
        className="flex-1 bg-transparent text-[#e8e8f0] placeholder-[#2E323A] text-sm resize-none focus:outline-none leading-relaxed py-1"
        style={{ maxHeight: "120px", overflowY: "auto" }}
        autoFocus
      />

      <button
        type="submit"
        disabled={disabled || !query.trim()}
        className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#C9A54E] hover:bg-[#d4a030] disabled:opacity-30 text-[#0C0F18] rounded-lg transition ml-3"
      >
        {disabled ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
      </button>
    </form>
  );
}
