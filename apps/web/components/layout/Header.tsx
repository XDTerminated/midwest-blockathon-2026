"use client";

import Link from "next/link";
import { Scale, Shield, Upload, Search } from "lucide-react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { formatCID } from "@/lib/utils";

export function Header() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-700">
            <Shield className="w-6 h-6" />
            <span>ImmiVault</span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/search?q=" className="hover:text-blue-700 flex items-center gap-1">
              <Search className="w-4 h-4" />
              Search Cases
            </Link>
            <Link href="/upload" className="hover:text-blue-700 flex items-center gap-1">
              <Upload className="w-4 h-4" />
              Share Your Case
            </Link>
            <Link href="/categories/asylum-refugee" className="hover:text-blue-700 flex items-center gap-1">
              <Scale className="w-4 h-4" />
              Browse
            </Link>
          </nav>

          {/* Wallet */}
          <div>
            {isConnected && address ? (
              <button
                onClick={() => disconnect()}
                className="text-sm bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition"
              >
                {formatCID(address, 4)}
              </button>
            ) : (
              <button
                onClick={() => connect({ connector: injected() })}
                className="text-sm bg-blue-700 text-white px-4 py-1.5 rounded-lg hover:bg-blue-800 transition"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
