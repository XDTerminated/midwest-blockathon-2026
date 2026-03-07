"use client";

import { useRef, useState, useEffect } from "react";
import { chatSearch } from "@/lib/api";
import type { ChatMessage } from "@/lib/api";
import { AIAnalysis } from "@/components/AIAnalysis";
import { AppLayout } from "@/components/layout/AppLayout";
import { ChatInput } from "@/components/ChatInput";
import type { SearchResult } from "@immivault/shared";

interface Message {
  role: "user" | "assistant";
  content: string;
  result?: SearchResult;
  error?: string;
}

export default function SearchPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(text: string) {
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    // Build history for the API (prior messages only)
    const history: ChatMessage[] = messages.map((m) => ({
      role: m.role,
      content: m.role === "assistant" ? (m.result?.analysis ?? m.content) : m.content,
    }));

    try {
      const result = await chatSearch(text, history);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: result.analysis, result },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "",
          error: err instanceof Error ? err.message : "Something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        {/* Messages area */}
        <div className="flex-1 overflow-auto px-6 py-8 max-w-3xl mx-auto w-full">
          {messages.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-[#2E323A] text-base">
                Describe your immigration situation to find relevant cases
              </p>
            </div>
          )}

          <div className="space-y-5">
            {messages.map((msg, i) =>
              msg.role === "user" ? (
                <div key={i} className="flex justify-end">
                  <div className="bg-[#1E2330] border border-[#2E323A] rounded-[14px] px-5 py-4 text-base text-[#e8e8f0] leading-relaxed max-w-[80%]">
                    {msg.content}
                  </div>
                </div>
              ) : (
                <div key={i} className="flex justify-start">
                  <div className="max-w-[85%]">
                    {msg.error ? (
                      <div className="bg-[#1a1015] border border-[#3a2020] text-red-400 rounded-[14px] px-5 py-4 text-base">
                        {msg.error}
                      </div>
                    ) : msg.result ? (
                      <AIAnalysis result={msg.result} />
                    ) : null}
                  </div>
                </div>
              )
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 text-[#2E323A] text-base py-3">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 bg-[#C9A54E] rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-[#C9A54E] rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-[#C9A54E] rounded-full animate-bounce [animation-delay:300ms]" />
                  </span>
                  Thinking...
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>
        </div>

        {/* Chat input fixed at bottom */}
        <div className="px-6 py-5">
          <div className="max-w-3xl mx-auto">
            <ChatInput onSend={handleSend} disabled={loading} />
            <p className="text-center text-[#2E323A] text-xs mt-3">
              Project utilizes real case data, not legal advice. Always verify with a qualified immigration attorney.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
