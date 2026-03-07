"use client";

import { MessageSquarePlus, MessageSquare, Upload, Wallet, PanelLeftClose, PanelLeftOpen, LogIn, UserPlus, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

import { useSession, signOut } from "@/lib/auth-client";
import { cn, formatCID } from "@/lib/utils";

const navItems = [
  { icon: MessageSquarePlus, label: "New Chat", href: "/search" },
  { icon: MessageSquare, label: "Chats", href: "/search" },
  { icon: Upload, label: "Upload a File", href: "/upload" },
  { icon: Wallet, label: "Wallet", href: "#wallet" },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: session } = useSession();

  return (
    <aside
      className={cn(
        "shrink-0 h-screen bg-[#0C0F18] border-r border-[#2E323A] flex flex-col py-6 sticky top-0",
        mounted && "transition-all duration-200",
        collapsed ? "w-[60px] px-3" : "w-[220px] px-5"
      )}
    >
      {/* Top row: collapse toggle. */}
      <div className={cn("flex items-center mb-10", collapsed ? "justify-center" : "justify-end")}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-[#2E323A] hover:text-[#5a5a70] transition"
        >
          {collapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
        </button>
      </div>

      {/* Nav. */}
      <nav className="flex flex-col gap-5 flex-1">
        {navItems.map(({ icon: Icon, label, href }) => {
          const isWallet = label === "Wallet";
          const active =
            href === "/upload"
              ? pathname === "/upload"
              : href === "/search" && label === "New Chat"
                ? pathname === "/search"
                : false;

          const itemClass = cn(
            "flex items-center transition cursor-pointer",
            collapsed ? "justify-center" : "gap-3",
            isWallet && isConnected && address
              ? "text-[#C9A54E]"
              : active
                ? "text-[#C9A54E]"
                : "text-[#2E323A] hover:text-[#5a5a70]"
          );

          if (isWallet) {
            const walletActive = isConnected && address;
            return (
              <button
                key={label}
                onClick={() => walletActive ? disconnect() : connect({ connector: injected() })}
                className={itemClass}
                title={collapsed ? (walletActive ? formatCID(address, 4) : "Wallet") : undefined}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{walletActive ? formatCID(address, 4) : "Wallet"}</span>
              </button>
            );
          }

          return (
            <Link
              key={label}
              href={href}
              className={itemClass}
              title={collapsed ? label : undefined}
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span className={cn("text-[13px] whitespace-nowrap overflow-hidden", collapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Auth. */}
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
