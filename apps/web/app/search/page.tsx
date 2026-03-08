"use client";

import type { SearchResult } from "@lumina/shared";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";

import { AIAnalysis } from "@/components/AIAnalysis";
import { ChatInput } from "@/components/ChatInput";
import { CyclingPlaceholder } from "@/components/CyclingPlaceholder";
import { AppLayout } from "@/components/layout/AppLayout";
import { TrustFeedback } from "@/components/TrustFeedback";
import { addChatMessage, type ChatMessage, chatSearch, createChatSession, getChatMessages } from "@/lib/api";
import { useLanguage } from "@/lib/i18n";

interface Message {
    role: "user" | "assistant";
    content: string;
    result?: SearchResult;
    error?: string;
}

const SearchPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const initialQuerySent = useRef(false);
    const messagesRef = useRef<Message[]>([]);
    const sessionIdRef = useRef<number | null>(null);
    const lastLoadedSession = useRef<number | null>(null);
    const { t, language, promptLanguageSwitch } = useLanguage();

    const paramSessionId = searchParams.get("session");

    const loadSession = useCallback(async (id: number) => {
        try {
            const { messages: saved } = await getChatMessages(id);
            const loaded: Message[] = saved.map((m) => ({
                role: m.role as "user" | "assistant",
                content: m.content,
                ...(m.role === "assistant" ? { result: { analysis: m.content, citedCases: [], disclaimer: "" } } : {}),
            }));
            messagesRef.current = loaded;
            setMessages(loaded);
            sessionIdRef.current = id;
            lastLoadedSession.current = id;
        } catch {
            messagesRef.current = [];
            setMessages([]);
            sessionIdRef.current = null;
            lastLoadedSession.current = null;
        }
    }, []);

    useEffect(() => {
        if (paramSessionId) {
            const id = Number(paramSessionId);
            if (isNaN(id)) return;
            // Don't reload if we already have this session loaded (either from creation or prior load).
            if (lastLoadedSession.current === id || sessionIdRef.current === id) return;
            loadSession(id);
        } else {
            // Navigated to /search without session — clear chat.
            if (sessionIdRef.current !== null) {
                messagesRef.current = [];
                setMessages([]);
                sessionIdRef.current = null;
                lastLoadedSession.current = null;
                initialQuerySent.current = false;
            }
        }
    }, [paramSessionId, loadSession]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const handleSend = useCallback(
        async (text: string) => {
            const userMsg: Message = { role: "user", content: text };
            const history: ChatMessage[] = messagesRef.current.map((m) => ({
                role: m.role,
                content: m.role === "assistant" ? (m.result?.analysis ?? m.content) : m.content,
            }));

            const updated = [...messagesRef.current, userMsg];
            messagesRef.current = updated;
            setMessages(updated);
            setLoading(true);

            // Create session on first message if needed.
            let activeSessionId = sessionIdRef.current;
            if (!activeSessionId) {
                try {
                    const created = await createChatSession();
                    activeSessionId = created.id;
                    sessionIdRef.current = created.id;
                    lastLoadedSession.current = created.id;
                    router.replace(`/search?session=${created.id}`);
                } catch {
                    // Non-fatal — continue without persistence.
                }
            }

            // Persist user message.
            if (activeSessionId) {
                addChatMessage(activeSessionId, "user", text).catch(() => {});
            }

            try {
                const result = await chatSearch(text, history);
                const next = [...messagesRef.current, { role: "assistant" as const, content: result.analysis, result }];
                messagesRef.current = next;
                setMessages(next);
                // Persist assistant message.
                if (activeSessionId) {
                    addChatMessage(activeSessionId, "assistant", result.analysis).catch(() => {});
                }
                if (result.detectedLanguage && result.detectedLanguage !== language) {
                    promptLanguageSwitch(result.detectedLanguage);
                }
            } catch (err) {
                const next = [
                    ...messagesRef.current,
                    {
                        role: "assistant" as const,
                        content: "",
                        error: err instanceof Error ? err.message : "Something went wrong.",
                    },
                ];
                messagesRef.current = next;
                setMessages(next);
            } finally {
                setLoading(false);
            }
        },
        [router, language, promptLanguageSwitch],
    );

    // Auto-send the initial query from the URL (?q=...)
    useEffect(() => {
        const q = searchParams.get("q");
        if (q && !initialQuerySent.current) {
            initialQuerySent.current = true;
            handleSend(q);
        }
    }, [searchParams, handleSend]);

    return (
        <AppLayout>
            <div className="flex flex-col h-full">
                {/* Messages area. */}
                <div className="flex-1 overflow-auto px-6 py-8 max-w-3xl mx-auto w-full">
                    {messages.length === 0 && !loading && (
                        <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
                            <CyclingPlaceholder />
                        </div>
                    )}

                    <div className="space-y-5">
                        {messages.map((msg, i) =>
                            msg.role === "user" ? (
                                <div key={i} className="flex justify-end animate-fade-in-up">
                                    <div className="bg-[#242838] border border-[#363C4A] rounded-[14px] px-5 py-4 text-base text-[#e8e8f0] leading-relaxed max-w-[80%] shadow-surface">{msg.content}</div>
                                </div>
                            ) : (
                                <div key={i} className="flex justify-start animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                                    <div className="max-w-[85%]">
                                        {msg.error ? (
                                            <div className="bg-[#201518] border border-[#3a2020] text-red-400 rounded-[14px] px-5 py-4 text-base">{msg.error}</div>
                                        ) : msg.result ? (
                                            <>
                                                <AIAnalysis result={msg.result} />
                                                <TrustFeedback citedCases={msg.result.citedCases} />
                                            </>
                                        ) : null}
                                    </div>
                                </div>
                            ),
                        )}

                        {loading && (
                            <div className="flex justify-start animate-fade-in">
                                <div className="flex items-center gap-3 py-3">
                                    <span className="pulse-ring" />
                                    <span className="shimmer-text text-sm font-medium tracking-wide">{t("analyzingCases")}</span>
                                </div>
                            </div>
                        )}

                        <div ref={bottomRef} />
                    </div>
                </div>

                {/* Chat input fixed at bottom. */}
                <div className="px-6 py-5 relative before:absolute before:inset-x-0 before:-top-6 before:h-6 before:bg-linear-to-t before:from-[#121620] before:to-transparent before:pointer-events-none">
                    <div className="max-w-3xl mx-auto">
                        <ChatInput onSend={handleSend} disabled={loading} />
                        <p className="text-center text-[#6B7280] text-xs mt-3">{t("disclaimer")}</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

const SearchPageWrapper = () => (
  <Suspense>
    <SearchPage />
  </Suspense>
);

export default SearchPageWrapper;
