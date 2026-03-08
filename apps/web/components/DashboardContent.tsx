"use client";

import { ACCESS_PRICE_DISPLAY, STAKE_AMOUNT_DISPLAY } from "@immivault/shared";
import type { EscrowInfo, CreditInfo } from "@immivault/shared";
import { CheckCircle, Clock, ExternalLink, Eye, FileText, Lock, Loader2, Star, TrendingUp, Wallet, XCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

import {
  getContributorStats,
  listFiles,
  getMyEscrows,
  getMyCredits,
  type UploadedFile,
} from "@/lib/api";

const statusBadge = (status: string) => {
  switch (status) {
    case "pending":
      return (
        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-yellow-900/30 text-yellow-400 border border-yellow-800/40">
          <Clock className="w-3 h-3" />
          Pending
        </span>
      );
    case "released":
      return (
        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-green-900/30 text-green-400 border border-green-800/40">
          <CheckCircle className="w-3 h-3" />
          Released
        </span>
      );
    case "slashed":
      return (
        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-red-900/30 text-red-400 border border-red-800/40">
          <XCircle className="w-3 h-3" />
          Slashed
        </span>
      );
    default:
      return <span className="text-xs text-[#8a8ea0]">{status}</span>;
  }
};

export const DashboardContent = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const [stats, setStats] = useState<{ casesUploaded: number; totalEarned: number; totalAccesses: number; cases: { cidHash: string; accessCount: number; earned: number; registeredAt: number }[] } | null>(null);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [escrows, setEscrows] = useState<EscrowInfo[]>([]);
  const [credits, setCredits] = useState<CreditInfo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isConnected || !address) return;

    setLoading(true);
    Promise.all([
      getContributorStats(address).catch(() => null),
      listFiles().then((r) => r.files).catch(() => []),
      getMyEscrows().catch(() => []),
      getMyCredits().catch(() => []),
    ]).then(([s, f, e, cr]) => {
      setStats(s);
      setFiles(f);
      setEscrows(e);
      setCredits(cr);
      setLoading(false);
    });
  }, [isConnected, address]);

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <div className="bg-[#161A24] border border-[#2E323A] rounded-full p-6">
          <Wallet className="w-10 h-10 text-[#C9A54E]" />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#e8e8f0] mb-2">Connect Your Wallet</h2>
          <p className="text-[#8a8ea0] text-sm max-w-sm">
            Connect your wallet to view your contributor dashboard, earnings, and uploaded cases.
          </p>
        </div>
        <button
          onClick={() => connect({ connector: injected() })}
          className="flex items-center gap-2 bg-[#C9A54E] hover:bg-[#d4a030] text-white font-semibold px-6 py-3 rounded-lg transition cursor-pointer"
        >
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 text-[#C9A54E] animate-spin" />
      </div>
    );
  }

  const totalEarnedUSDC = stats ? (stats.totalEarned / 1_000_000).toFixed(2) : "0.00";
  const totalCredits = credits.reduce((sum, c) => sum + c.credits, 0);
  const totalReferences = credits.reduce((sum, c) => sum + c.referenceCount, 0);
  const pendingEscrows = escrows.filter((e) => e.status === "pending").length;
  const releasedEscrows = escrows.filter((e) => e.status === "released").length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-[#e8e8f0] mb-1">Contributor Dashboard</h1>
        <p className="text-sm text-[#8a8ea0] font-mono">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </p>
      </div>

      {/* Stats cards. */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-[#161A24] border border-[#2E323A] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-4 h-4 text-[#C9A54E]" />
            <span className="text-xs text-[#8a8ea0] uppercase tracking-wider">Cases</span>
          </div>
          <p className="text-2xl font-bold text-[#e8e8f0]">{stats?.casesUploaded ?? files.length}</p>
        </div>

        <div className="bg-[#161A24] border border-[#2E323A] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-4 h-4 text-[#C9A54E]" />
            <span className="text-xs text-[#8a8ea0] uppercase tracking-wider">Staked</span>
          </div>
          <p className="text-2xl font-bold text-[#e8e8f0]">{escrows.length}</p>
          <p className="text-xs text-[#8a8ea0] mt-1">{pendingEscrows} pending · {releasedEscrows} released</p>
        </div>

        <div className="bg-[#161A24] border border-[#2E323A] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-4 h-4 text-[#C9A54E]" />
            <span className="text-xs text-[#8a8ea0] uppercase tracking-wider">Credits</span>
          </div>
          <p className="text-2xl font-bold text-[#C9A54E]">{totalCredits}</p>
          <p className="text-xs text-[#8a8ea0] mt-1">{totalReferences} AI references</p>
        </div>

        <div className="bg-[#161A24] border border-[#2E323A] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-[#C9A54E]" />
            <span className="text-xs text-[#8a8ea0] uppercase tracking-wider">Earned</span>
          </div>
          <p className="text-2xl font-bold text-[#C9A54E]">${totalEarnedUSDC}</p>
          <p className="text-xs text-[#8a8ea0] mt-1">USDC · ${ACCESS_PRICE_DISPLAY}/view</p>
        </div>
      </div>

      {/* Escrow table. */}
      {escrows.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-[#e8e8f0] mb-4">Escrow Status</h2>
          <div className="bg-[#161A24] border border-[#2E323A] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2E323A]">
                  <th className="text-left text-xs text-[#8a8ea0] uppercase tracking-wider px-4 py-3">CID</th>
                  <th className="text-center text-xs text-[#8a8ea0] uppercase tracking-wider px-4 py-3">Status</th>
                  <th className="text-center text-xs text-[#8a8ea0] uppercase tracking-wider px-4 py-3">Stake</th>
                  <th className="text-center text-xs text-[#8a8ea0] uppercase tracking-wider px-4 py-3">Votes</th>
                  <th className="text-right text-xs text-[#8a8ea0] uppercase tracking-wider px-4 py-3">Staked At</th>
                </tr>
              </thead>
              <tbody>
                {escrows.map((e) => (
                  <tr key={e.cid} className="border-b border-[#2E323A] last:border-0 hover:bg-[#1a1e2a]">
                    <td className="px-4 py-3 font-mono text-[#e8e8f0] text-xs">
                      <Link href={`/case/${e.cid}`} className="hover:text-[#C9A54E]">
                        {e.cid.slice(0, 16)}...
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-center">{statusBadge(e.status)}</td>
                    <td className="px-4 py-3 text-center text-[#C9A54E] font-medium">${STAKE_AMOUNT_DISPLAY}</td>
                    <td className="px-4 py-3 text-center text-[#8a8ea0]">
                      <span className="text-green-400">{e.approvalCount}</span>
                      {" / "}
                      <span className="text-red-400">{e.flagCount}</span>
                    </td>
                    <td className="px-4 py-3 text-right text-[#8a8ea0] text-xs">
                      {new Date(e.stakedAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Credits table. */}
      {credits.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-[#e8e8f0] mb-4">Case Credits</h2>
          <div className="bg-[#161A24] border border-[#2E323A] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2E323A]">
                  <th className="text-left text-xs text-[#8a8ea0] uppercase tracking-wider px-4 py-3">CID</th>
                  <th className="text-right text-xs text-[#8a8ea0] uppercase tracking-wider px-4 py-3">Credits</th>
                  <th className="text-right text-xs text-[#8a8ea0] uppercase tracking-wider px-4 py-3">References</th>
                </tr>
              </thead>
              <tbody>
                {credits.map((c) => (
                  <tr key={c.cid} className="border-b border-[#2E323A] last:border-0 hover:bg-[#1a1e2a]">
                    <td className="px-4 py-3 font-mono text-[#e8e8f0] text-xs">
                      {c.cid.slice(0, 16)}...
                    </td>
                    <td className="px-4 py-3 text-right text-[#C9A54E] font-bold">{c.credits}</td>
                    <td className="px-4 py-3 text-right text-[#8a8ea0]">{c.referenceCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* On-chain cases. */}
      {stats && stats.cases.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-[#e8e8f0] mb-4">On-Chain Cases</h2>
          <div className="bg-[#161A24] border border-[#2E323A] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2E323A]">
                  <th className="text-left text-xs text-[#8a8ea0] uppercase tracking-wider px-4 py-3">CID Hash</th>
                  <th className="text-right text-xs text-[#8a8ea0] uppercase tracking-wider px-4 py-3">Views</th>
                  <th className="text-right text-xs text-[#8a8ea0] uppercase tracking-wider px-4 py-3">Earned</th>
                  <th className="text-right text-xs text-[#8a8ea0] uppercase tracking-wider px-4 py-3">Registered</th>
                </tr>
              </thead>
              <tbody>
                {stats.cases.map((c) => (
                  <tr key={c.cidHash} className="border-b border-[#2E323A] last:border-0 hover:bg-[#1a1e2a]">
                    <td className="px-4 py-3 font-mono text-[#e8e8f0] text-xs">
                      {c.cidHash.slice(0, 10)}...{c.cidHash.slice(-6)}
                    </td>
                    <td className="px-4 py-3 text-right text-[#e8e8f0]">{c.accessCount}</td>
                    <td className="px-4 py-3 text-right text-[#C9A54E] font-medium">
                      ${(c.earned / 1_000_000).toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-right text-[#8a8ea0]">
                      {new Date(c.registeredAt * 1000).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Uploaded files from Pinata. */}
      {files.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-[#e8e8f0] mb-4">Your Uploaded Files</h2>
          <div className="space-y-2">
            {files.map((f) => (
              <div
                key={f.cid}
                className="flex items-center justify-between bg-[#161A24] border border-[#2E323A] rounded-lg px-4 py-3 hover:border-[#C9A54E] transition"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <FileText className="w-4 h-4 text-[#8a8ea0] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm text-[#e8e8f0] truncate">{f.name}</p>
                    <p className="text-xs text-[#8a8ea0] font-mono truncate">{f.cid}</p>
                  </div>
                </div>
                <Link
                  href={`/case/${f.cid}`}
                  className="text-[#C9A54E] hover:text-[#d4a030] shrink-0 ml-2"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {(!stats || stats.cases.length === 0) && files.length === 0 && escrows.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#8a8ea0] mb-4">No cases uploaded yet.</p>
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 bg-[#C9A54E] hover:bg-[#d4a030] text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Upload Your First Case
          </Link>
        </div>
      )}
    </div>
  );
};
