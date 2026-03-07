"use client";

import { ACCESS_PRICE_DISPLAY } from "@immivault/shared";
import { ExternalLink, Eye, FileText, Loader2, TrendingUp, Wallet } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

import { getContributorStats, listFiles, type UploadedFile } from "@/lib/api";

interface ContributorStats {
  casesUploaded: number;
  totalEarned: number;
  totalAccesses: number;
  cases: { cidHash: string; accessCount: number; earned: number; registeredAt: number }[];
}

export const DashboardContent = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const [stats, setStats] = useState<ContributorStats | null>(null);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isConnected || !address) return;

    setLoading(true);
    Promise.all([
      getContributorStats(address).catch(() => null),
      listFiles().then((r) => r.files).catch(() => []),
    ]).then(([s, f]) => {
      setStats(s);
      setFiles(f);
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
          className="flex items-center gap-2 bg-[#C9A54E] hover:bg-[#d4a030] text-white font-semibold px-6 py-3 rounded-lg transition"
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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-[#e8e8f0] mb-1">Contributor Dashboard</h1>
        <p className="text-sm text-[#8a8ea0] font-mono">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </p>
      </div>

      {/* Stats cards. */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#161A24] border border-[#2E323A] rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-5 h-5 text-[#C9A54E]" />
            <span className="text-xs text-[#8a8ea0] uppercase tracking-wider">Cases Uploaded</span>
          </div>
          <p className="text-3xl font-bold text-[#e8e8f0]">{stats?.casesUploaded ?? files.length}</p>
        </div>

        <div className="bg-[#161A24] border border-[#2E323A] rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <Eye className="w-5 h-5 text-[#C9A54E]" />
            <span className="text-xs text-[#8a8ea0] uppercase tracking-wider">Total Views</span>
          </div>
          <p className="text-3xl font-bold text-[#e8e8f0]">{stats?.totalAccesses ?? 0}</p>
        </div>

        <div className="bg-[#161A24] border border-[#2E323A] rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-5 h-5 text-[#C9A54E]" />
            <span className="text-xs text-[#8a8ea0] uppercase tracking-wider">Total Earned</span>
          </div>
          <p className="text-3xl font-bold text-[#C9A54E]">${totalEarnedUSDC}</p>
          <p className="text-xs text-[#8a8ea0] mt-1">USDC · ${ACCESS_PRICE_DISPLAY} per view</p>
        </div>
      </div>

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

      {(!stats || stats.cases.length === 0) && files.length === 0 && (
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
