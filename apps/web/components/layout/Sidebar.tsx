"use client";

import { MessageSquarePlus, MessageSquare, Upload, Wallet, PanelLeftClose, PanelLeftOpen, LogIn, UserPlus, LogOut, LayoutDashboard, Trash2 } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

import { useSession, signOut } from "@/lib/auth-client";
import { formatCID, cn } from "@/lib/utils";
import { listChatSessions, deleteChatSession } from "@/lib/api";
import type { ChatSession } from "@/lib/api";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeSessionId = searchParams.get("session");

  useEffect(() => { setMounted(true); }, []);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: session } = useSession();

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
    <aside
      className={cn(
        "shrink-0 h-screen bg-[#0C0F18] border-r border-[#2E323A] flex flex-col py-6 sticky top-0",
        mounted && "transition-all duration-200",
        collapsed ? "w-[60px] px-3" : "w-[220px] px-5"
      )}
    >
      {/* Top row: collapse toggle */}
      <div className={cn("flex items-center mb-10", collapsed ? "justify-center" : "justify-end")}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-[#2E323A] hover:text-[#5a5a70] transition"
        >
          {collapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-5 flex-1 overflow-hidden">
        {/* New Chat */}
        <Link
          href="/search"
          className={cn(
            "flex items-center transition cursor-pointer",
            collapsed ? "justify-center" : "gap-3",
            pathname === "/search" && !activeSessionId
              ? "text-[#C9A54E]"
              : "text-[#2E323A] hover:text-[#5a5a70]"
          )}
          title={collapsed ? "New Chat" : undefined}
        >
          <MessageSquarePlus className="w-5 h-5 shrink-0" />
          <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>New Chat</span>
        </Link>

        {/* Chats header */}
        <div
          className={cn(
            "flex items-center",
            collapsed ? "justify-center" : "gap-3",
            "text-[#2E323A]"
          )}
        >
          <MessageSquare className="w-5 h-5 shrink-0" />
          <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>Chats</span>
        </div>

        {/* Chat session list */}
        {!collapsed && chatSessions.length > 0 && (
          <div className="flex flex-col gap-1 pl-8 overflow-y-auto max-h-[200px] -mt-2">
            {chatSessions.map((cs) => (
              <Link
                key={cs.id}
                href={`/search?session=${cs.id}`}
                className={cn(
                  "group flex items-center justify-between text-[12px] py-1.5 px-2 rounded-md transition truncate",
                  activeSessionId === String(cs.id)
                    ? "text-[#C9A54E] bg-[#161A24]"
                    : "text-[#5a5a70] hover:text-[#8a8ea0] hover:bg-[#161A24]"
                )}
              >
                <span className="truncate">{cs.title}</span>
                <button
                  onClick={(e) => handleDeleteSession(cs.id, e)}
                  className="opacity-0 group-hover:opacity-100 text-[#5a5a70] hover:text-red-400 transition shrink-0 ml-1"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </Link>
            ))}
          </div>
        )}

        {/* Upload */}
        <Link
          href="/upload"
          className={cn(
            "flex items-center transition cursor-pointer",
            collapsed ? "justify-center" : "gap-3",
            pathname === "/upload"
              ? "text-[#C9A54E]"
              : "text-[#2E323A] hover:text-[#5a5a70]"
          )}
          title={collapsed ? "Upload a File" : undefined}
        >
          <Upload className="w-5 h-5 shrink-0" />
          <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>Upload a File</span>
        </Link>

        {/* Dashboard */}
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center transition cursor-pointer",
            collapsed ? "justify-center" : "gap-3",
            pathname === "/dashboard"
              ? "text-[#C9A54E]"
              : "text-[#2E323A] hover:text-[#5a5a70]"
          )}
          title={collapsed ? "Dashboard" : undefined}
        >
          <LayoutDashboard className="w-5 h-5 shrink-0" />
          <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>Dashboard</span>
        </Link>

        {/* Wallet */}
        <button
          onClick={() => isWalletActive ? disconnect() : connect({ connector: injected() })}
          className={cn(
            "flex items-center transition cursor-pointer",
            collapsed ? "justify-center" : "gap-3",
            isWalletActive
              ? "text-[#C9A54E]"
              : "text-[#2E323A] hover:text-[#5a5a70]"
          )}
          title={collapsed ? (isWalletActive ? formatCID(address, 4) : "Wallet") : undefined}
        >
          <Wallet className="w-5 h-5 shrink-0" />
          <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{isWalletActive ? formatCID(address, 4) : "Wallet"}</span>
        </button>
      </nav>

      {/* Auth */}
      <div className="flex flex-col gap-3 pt-4 border-t border-[#2E323A]">
        {session?.user ? (
          <>
            <div className={cn("flex items-center", collapsed ? "justify-center" : "gap-3")}>
              <div className="w-5 h-5 rounded-full bg-[#C9A54E] flex items-center justify-center text-[10px] font-bold text-[#0C0F18] shrink-0">
                {session.user.name?.charAt(0).toUpperCase() ?? "U"}
              </div>
              <span className={cn("text-[13px] text-[#8a8ea0] truncate whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{session.user.name ?? session.user.email}</span>
            </div>
            <button
              onClick={() => signOut()}
              className={cn(
                "flex items-center text-[#2E323A] hover:text-[#5a5a70] transition",
                collapsed ? "justify-center" : "gap-3"
              )}
              title={collapsed ? "Log out" : undefined}
            >
              <LogOut className="w-5 h-5 shrink-0" />
              <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>Log out</span>
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className={cn(
                "flex items-center text-[#2E323A] hover:text-[#5a5a70] transition",
                collapsed ? "justify-center" : "gap-3",
                pathname === "/login" && "text-[#C9A54E]"
              )}
              title={collapsed ? "Log in" : undefined}
            >
              <LogIn className="w-5 h-5 shrink-0" />
              <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>Log in</span>
            </Link>
            <Link
              href="/signup"
              className={cn(
                "flex items-center text-[#2E323A] hover:text-[#5a5a70] transition",
                collapsed ? "justify-center" : "gap-3",
                pathname === "/signup" && "text-[#C9A54E]"
              )}
              title={collapsed ? "Sign up" : undefined}
            >
              <UserPlus className="w-5 h-5 shrink-0" />
              <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>Sign up</span>
            </Link>
          </>
        )}
      </div>
    </aside>
  );
};
