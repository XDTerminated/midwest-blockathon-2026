"use client";

import { MessageSquarePlus, MessageSquare, Upload, Wallet, PanelLeftClose, PanelLeftOpen, LogIn, UserPlus, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

import { useSession, signOut } from "@/lib/auth-client";
import { formatCID, cn } from "@/lib/utils";

const navItems = [
  { icon: MessageSquarePlus, label: "New Chat", href: "/search" },
  { icon: MessageSquare, label: "Chats", href: "/search" },
  { icon: Upload, label: "Upload a File", href: "/upload" },
  { icon: Wallet, label: "Wallet", href: "#wallet" },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("sidebar-collapsed") === "true";
    }
    return false;
  });
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", String(collapsed));
  }, [collapsed]);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: session } = useSession();

  // CSS-only tooltip: the "group" class on the wrapper triggers "group-hover:opacity-100" on the tooltip span
  const tooltipClass = "absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-lg bg-[#1C2030] border border-[#363C4A] text-[12px] text-[#e8e8f0] whitespace-nowrap z-50 pointer-events-none shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150";

  return (
    <aside
      className={cn(
        "shrink-0 h-screen bg-[#121620] border-r border-[#363C4A] flex flex-col py-6 sticky top-0",
        mounted && "transition-all duration-200",
        collapsed ? "w-[68px] px-3" : "w-[260px] px-5"
      )}
    >
      {/* Top row: collapse toggle */}
      <div className={cn("flex items-center mb-10", collapsed ? "justify-center" : "justify-end")}>
        <div className="relative group">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg text-[#6B7280] hover:text-[#9CA3AF] hover:bg-[#1C2030] transition"
          >
            {collapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
          </button>
          {collapsed && <span className={tooltipClass}>Expand</span>}
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map(({ icon: Icon, label, href }) => {
          const isWallet = label === "Wallet";
          const active =
            href === "/upload"
              ? pathname === "/upload"
              : href === "/search" && label === "New Chat"
                ? pathname === "/search"
                : false;

          const itemClass = cn(
            "flex items-center transition cursor-pointer rounded-lg px-3 py-2.5 w-full",
            collapsed ? "justify-center" : "gap-3",
            isWallet && isConnected && address
              ? "text-[#D4AD5A] bg-[#D4AD5A]/10"
              : active
                ? "text-[#D4AD5A] bg-[#D4AD5A]/10"
                : "text-[#6B7280] hover:text-[#9CA3AF] hover:bg-[#1C2030]"
          );

          const tooltipLabel = isWallet && isConnected && address ? formatCID(address, 4) : label;

          if (isWallet) {
            const walletActive = isConnected && address;
            return (
              <div key={label} className="relative group">
                <button
                  onClick={() => walletActive ? disconnect() : connect({ connector: injected() })}
                  className={itemClass}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{walletActive ? formatCID(address, 4) : "Wallet"}</span>
                </button>
                {collapsed && <span className={tooltipClass}>{tooltipLabel}</span>}
              </div>
            );
          }

          return (
            <div key={label} className="relative group">
              <Link href={href} className={itemClass}>
                <Icon className="w-5 h-5 shrink-0" />
                <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{label}</span>
              </Link>
              {collapsed && <span className={tooltipClass}>{label}</span>}
            </div>
          );
        })}
      </nav>

      {/* Auth */}
      <div className="flex flex-col gap-1 pt-4 border-t border-[#363C4A]">
        {session?.user ? (
          <>
            <div className="relative group">
              <div className={cn("flex items-center rounded-lg px-3 py-2.5", collapsed ? "justify-center" : "gap-3")}>
                <div className="w-5 h-5 rounded-full bg-[#D4AD5A] flex items-center justify-center text-[10px] font-bold text-[#121620] shrink-0">
                  {session.user.name?.charAt(0).toUpperCase() ?? "U"}
                </div>
                <span className={cn("text-[13px] text-[#9CA3AF] truncate whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{session.user.name ?? session.user.email}</span>
              </div>
              {collapsed && <span className={tooltipClass}>{session.user.name ?? session.user.email ?? "User"}</span>}
            </div>
            <div className="relative group">
              <button
                onClick={() => signOut()}
                className={cn(
                  "flex items-center text-[#6B7280] hover:text-[#9CA3AF] hover:bg-[#1C2030] transition rounded-lg px-3 py-2.5 w-full",
                  collapsed ? "justify-center" : "gap-3"
                )}
              >
                <LogOut className="w-5 h-5 shrink-0" />
                <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>Log out</span>
              </button>
              {collapsed && <span className={tooltipClass}>Log out</span>}
            </div>
          </>
        ) : (
          <>
            <div className="relative group">
              <Link
                href="/login"
                className={cn(
                  "flex items-center text-[#6B7280] hover:text-[#9CA3AF] hover:bg-[#1C2030] transition rounded-lg px-3 py-2.5",
                  collapsed ? "justify-center" : "gap-3",
                  pathname === "/login" && "text-[#D4AD5A] bg-[#D4AD5A]/10"
                )}
              >
                <LogIn className="w-5 h-5 shrink-0" />
                <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>Log in</span>
              </Link>
              {collapsed && <span className={tooltipClass}>Log in</span>}
            </div>
            <div className="relative group">
              <Link
                href="/signup"
                className={cn(
                  "flex items-center text-[#6B7280] hover:text-[#9CA3AF] hover:bg-[#1C2030] transition rounded-lg px-3 py-2.5",
                  collapsed ? "justify-center" : "gap-3",
                  pathname === "/signup" && "text-[#D4AD5A] bg-[#D4AD5A]/10"
                )}
              >
                <UserPlus className="w-5 h-5 shrink-0" />
                <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>Sign up</span>
              </Link>
              {collapsed && <span className={tooltipClass}>Sign up</span>}
            </div>
          </>
        )}
      </div>
    </aside>
  );
};
