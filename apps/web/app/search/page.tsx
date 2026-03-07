import { searchCases } from "@/lib/api";
import { AIAnalysis } from "@/components/AIAnalysis";
import { AppLayout } from "@/components/layout/AppLayout";
import { ChatInput } from "@/components/ChatInput";
import type { SearchResult } from "@immivault/shared";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const q = params.q?.trim() ?? "";

  let result: SearchResult | null = null;
  let searchError: string | null = null;

  if (q) {
    try {
      result = await searchCases(q, {});
    } catch (err) {
      searchError = err instanceof Error ? err.message : "Search failed. Is the API running?";
    }
  }

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        {/* Messages area */}
        <div className="flex-1 overflow-auto px-6 py-8 max-w-3xl mx-auto w-full">
          {!q && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-[#2E323A] text-base">
                Describe your immigration situation to find relevant cases
              </p>
            </div>
          )}

          {q && (
            <div className="space-y-5">
              {/* User message */}
              <div className="bg-[#161A24] border border-[#2E323A] rounded-[14px] px-5 py-4 text-sm text-[#e8e8f0] leading-relaxed">
                {q}
              </div>

              {/* AI response */}
              {searchError && (
                <div className="bg-[#1a1015] border border-[#3a2020] text-red-400 rounded-[14px] px-5 py-4 text-sm">
                  {searchError}
                </div>
              )}

              {result && (
                <AIAnalysis result={result} />
              )}

              {!result && !searchError && (
                <div className="flex items-center gap-2 text-[#2E323A] text-sm py-3">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 bg-[#C9A54E] rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-[#C9A54E] rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-[#C9A54E] rounded-full animate-bounce [animation-delay:300ms]" />
                  </span>
                  Searching cases...
                </div>
              )}
            </div>
          )}
        </div>

        {/* Chat input fixed at bottom */}
        <div className="px-6 py-5">
          <div className="max-w-3xl mx-auto">
            <ChatInput defaultValue="" />
            <p className="text-center text-[#2E323A] text-xs mt-3">
              Project utilizes real case data, not legal advice. Always verify with a qualified immigration attorney.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
