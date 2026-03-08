"use client";

import { FileText, LayoutDashboard, LogIn, LogOut, MessageSquare, MessageSquarePlus, PanelLeftClose, PanelLeftOpen, Scale, Trash2, Upload, UserPlus, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

import { deleteChatSession, listChatSessions, type ChatSession } from "@/lib/api";
import { signOut, useSession } from "@/lib/auth-client";
import { useLanguage } from "@/lib/i18n";
import { cn, formatCID } from "@/lib/utils";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("sidebar-collapsed") === "true";
        }
        return false;
    });
    const [mounted, setMounted] = useState(false);
    const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeSessionId = searchParams.get("session");
    const { t } = useLanguage();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        localStorage.setItem("sidebar-collapsed", String(collapsed));
    }, [collapsed]);
    const { address, isConnected } = useAccount();
    const { connect } = useConnect();
    const { disconnect } = useDisconnect();
    const { data: session } = useSession();

    // CSS-only tooltip: the "group" class on the wrapper triggers "group-hover:opacity-100" on the tooltip span.
    const tooltipClass = "absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-lg bg-[#1C2030] border border-[#363C4A] text-[12px] text-[#e8e8f0] whitespace-nowrap z-50 pointer-events-none shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150";

    const loadSessions = useCallback(async () => {
        if (!session?.user) return;
        try {
            const { sessions } = await listChatSessions();
            setChatSessions(sessions);
        } catch {
            // Non-fatal.
        }
    }, [session?.user]);

    useEffect(() => {
        loadSessions();
    }, [loadSessions, pathname, activeSessionId]);

    const handleDeleteSession = async (id: number, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            await deleteChatSession(id);
            setChatSessions((prev) => prev.filter((s) => s.id !== id));
        } catch {
            // Non-fatal.
        }
    };

    const isWalletActive = isConnected && address;

    return (
        <aside className={cn("shrink-0 h-screen bg-[#121620] border-r border-[#363C4A] flex flex-col py-6 sticky top-0 shadow-[4px_0_16px_rgba(0,0,0,0.3)]", mounted && "transition-all duration-200", collapsed ? "w-17 px-3" : "w-65 px-5")}>
            {/* Top row: collapse toggle. */}
            <div className={cn("flex items-center mb-10", collapsed ? "justify-center" : "justify-end")}>
                <div className="relative group">
                    <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded-lg text-[#6B7280] hover:text-[#9CA3AF] hover:bg-[#1C2030] transition">
                        {collapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
                    </button>
                    {collapsed && <span className={tooltipClass}>{t("expand")}</span>}
                </div>
            </div>

            {/* Nav. */}
            <nav className="flex flex-col gap-5 flex-1 overflow-hidden">
                {/* New Chat */}
                <button onClick={() => router.push("/search")} className={cn("flex items-center transition cursor-pointer", collapsed ? "justify-center" : "gap-3", pathname === "/search" && !activeSessionId ? "text-[#D4AD5A]" : "text-[#6B7280] hover:text-[#9CA3AF]")} title={collapsed ? t("newChat") : undefined}>
                    <MessageSquarePlus className="w-5 h-5 shrink-0" />
                    <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{t("newChat")}</span>
                </button>

                {/* Chats header */}
                <div className={cn("flex items-center", collapsed ? "justify-center" : "gap-3", "text-[#6B7280]")}>
                    <MessageSquare className="w-5 h-5 shrink-0" />
                    <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{t("chats")}</span>
                </div>

                {/* Chat session list */}
                {!collapsed && chatSessions.length > 0 && (
                    <div className="flex flex-col gap-1 pl-8 overflow-y-auto max-h-50 -mt-2">
                        {chatSessions.map((cs) => (
                            <Link key={cs.id} href={`/search?session=${cs.id}`} className={cn("group flex items-center justify-between text-[12px] py-1.5 px-2 rounded-md transition truncate", activeSessionId === String(cs.id) ? "text-[#D4AD5A] bg-[#1C2030]" : "text-[#6B7280] hover:text-[#9CA3AF] hover:bg-[#1C2030]")}>
                                <span className="truncate">{cs.title}</span>
                                <button onClick={(e) => handleDeleteSession(cs.id, e)} className="opacity-0 group-hover:opacity-100 text-[#6B7280] hover:text-red-400 transition shrink-0 ml-1">
                                    <Trash2 className="w-3 h-3" />
                                </button>
                            </Link>
                        ))}
                    </div>
                )}

                {/* Upload */}
                <Link href="/upload" className={cn("flex items-center transition cursor-pointer", collapsed ? "justify-center" : "gap-3", pathname === "/upload" ? "text-[#D4AD5A]" : "text-[#6B7280] hover:text-[#9CA3AF]")} title={collapsed ? t("uploadFile") : undefined}>
                    <Upload className="w-5 h-5 shrink-0" />
                    <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{t("uploadFile")}</span>
                </Link>

                {/* Files */}
                <Link href="/files" className={cn("flex items-center transition cursor-pointer", collapsed ? "justify-center" : "gap-3", pathname === "/files" ? "text-[#D4AD5A]" : "text-[#6B7280] hover:text-[#9CA3AF]")} title={collapsed ? t("files") : undefined}>
                    <FileText className="w-5 h-5 shrink-0" />
                    <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{t("files")}</span>
                </Link>

                {/* Dashboard */}
                <Link href="/dashboard" className={cn("flex items-center transition cursor-pointer", collapsed ? "justify-center" : "gap-3", pathname === "/dashboard" ? "text-[#D4AD5A]" : "text-[#6B7280] hover:text-[#9CA3AF]")} title={collapsed ? "Dashboard" : undefined}>
                    <LayoutDashboard className="w-5 h-5 shrink-0" />
                    <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>Dashboard</span>
                </Link>

                {/* Request a Lawyer */}
                <Link href="/lawyer" className={cn("flex items-center transition cursor-pointer", collapsed ? "justify-center" : "gap-3", pathname === "/lawyer" ? "text-[#D4AD5A]" : "text-[#6B7280] hover:text-[#9CA3AF]")} title={collapsed ? t("requestLawyer") : undefined}>
                    <Scale className="w-5 h-5 shrink-0" />
                    <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{t("requestLawyer")}</span>
                </Link>

                {/* Wallet */}
                <button onClick={() => (isWalletActive ? disconnect() : connect({ connector: injected() }))} className={cn("flex items-center transition cursor-pointer", collapsed ? "justify-center" : "gap-3", isWalletActive ? "text-[#D4AD5A]" : "text-[#6B7280] hover:text-[#9CA3AF]")} title={collapsed ? (isWalletActive ? formatCID(address, 4) : t("wallet")) : undefined}>
                    <Wallet className="w-5 h-5 shrink-0" />
                    <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{isWalletActive ? formatCID(address, 4) : t("wallet")}</span>
                </button>
            </nav>

            {/* Auth. */}
            <div className="flex flex-col gap-3 pt-4 border-t border-[#363C4A]">
                {session?.user ? (
                    <>
                        <div className="relative group">
                            <div className={cn("flex items-center rounded-lg px-3 py-2.5", collapsed ? "justify-center" : "gap-3")}>
                                <div className="w-5 h-5 rounded-full bg-[#D4AD5A] flex items-center justify-center text-[10px] font-bold text-[#121620] shrink-0">{session.user.name?.charAt(0).toUpperCase() ?? "U"}</div>
                                <span className={cn("text-[13px] text-[#9CA3AF] truncate whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{session.user.name ?? session.user.email}</span>
                            </div>
                            {collapsed && <span className={tooltipClass}>{session.user.name ?? session.user.email ?? "User"}</span>}
                        </div>
                        <div className="relative group">
                            <button onClick={() => signOut()} className={cn("flex items-center text-[#6B7280] hover:text-[#9CA3AF] hover:bg-[#1C2030] transition rounded-lg px-3 py-2.5 w-full", collapsed ? "justify-center" : "gap-3")}>
                                <LogOut className="w-5 h-5 shrink-0" />
                                <span className={cn("text-[13px] whitespace-nowrap overflow-hidden transition-[opacity,width] duration-200", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{t("logOut")}</span>
                            </button>
                            {collapsed && <span className={tooltipClass}>{t("logOut")}</span>}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="relative group">
                            <Link href="/login" className={cn("flex items-center text-[#6B7280] hover:text-[#9CA3AF] hover:bg-[#1C2030] transition rounded-lg px-3 py-2.5", collapsed ? "justify-center" : "gap-3", pathname === "/login" && "text-[#D4AD5A] bg-[#D4AD5A]/10 active-indicator")}>
                                <LogIn className="w-5 h-5 shrink-0" />
                                <span className={cn("text-[13px] whitespace-nowrap overflow-hidden transition-[opacity,width] duration-200", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{t("logIn")}</span>
                            </Link>
                            {collapsed && <span className={tooltipClass}>{t("logIn")}</span>}
                        </div>
                        <div className="relative group">
                            <Link href="/signup" className={cn("flex items-center text-[#6B7280] hover:text-[#9CA3AF] hover:bg-[#1C2030] transition rounded-lg px-3 py-2.5", collapsed ? "justify-center" : "gap-3", pathname === "/signup" && "text-[#D4AD5A] bg-[#D4AD5A]/10 active-indicator")}>
                                <UserPlus className="w-5 h-5 shrink-0" />
                                <span className={cn("text-[13px] whitespace-nowrap overflow-hidden transition-[opacity,width] duration-200", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{t("signUp")}</span>
                            </Link>
                            {collapsed && <span className={tooltipClass}>{t("signUp")}</span>}
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
};
