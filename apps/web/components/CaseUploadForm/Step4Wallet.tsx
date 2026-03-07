"use client";

import { Wallet } from "lucide-react";
import { useAccount, useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

import type { FormData } from "./index";

interface Props {
  data: FormData;
  onChange: (d: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step4Wallet = ({ data, onChange, onNext, onBack }: Props) => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();

  const useConnectedWallet = () => {
    if (address) onChange({ contributorWallet: address });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-semibold text-[#e8e8f0]">Earnings Wallet</h2>
      <p className="text-[#6B7280] text-sm">
        When someone pays to view your case,{" "}
        <strong className="text-[#D4AD5A]">$0.10 USDC</strong> is sent directly to
        your wallet on the Base network. This field is optional — you can skip it to contribute
        anonymously without earning.
      </p>

      <div className="bg-[#1C2030] border border-[#363C4A] rounded-lg p-4 text-sm">
        <p className="font-semibold text-[#D4AD5A] mb-2">How contributor earnings work</p>
        <ul className="list-disc pl-4 space-y-1 text-[#6B7280]">
          <li>Every full case view costs $0.10 USDC on Base</li>
          <li>Payment goes directly to your wallet address</li>
          <li>No platform fee — 100% to the contributor</li>
          <li>You can leave this blank to contribute anonymously</li>
        </ul>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#9CA3AF] mb-1">
          Wallet Address (optional)
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={data.contributorWallet ?? ""}
            onChange={(e) => onChange({ contributorWallet: e.target.value })}
            placeholder="0x... (Base network)"
            className="flex-1 bg-[#121620] border border-[#363C4A] text-[#e8e8f0] placeholder-[#6B7280] rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#D4AD5A] transition"
          />
          {isConnected ? (
            <button
              type="button"
              onClick={useConnectedWallet}
              className="shrink-0 text-sm bg-[#1C2030] text-[#D4AD5A] border border-[#363C4A] px-3 py-2 rounded-lg hover:border-[#D4AD5A] transition whitespace-nowrap"
            >
              Use Connected
            </button>
          ) : (
            <button
              type="button"
              onClick={() => connect({ connector: injected() })}
              className="shrink-0 text-sm bg-[#1C2030] text-[#6B7280] border border-[#363C4A] px-3 py-2 rounded-lg hover:text-[#e8e8f0] hover:border-[#D4AD5A] transition flex items-center gap-1 whitespace-nowrap"
            >
              <Wallet className="w-3.5 h-3.5" />
              Connect
            </button>
          )}
        </div>
        <p className="text-xs text-[#6B7280] mt-1">
          Only Base-compatible wallets (MetaMask, Coinbase Wallet, etc.)
        </p>
      </div>

      <div className="flex justify-between pt-2">
        <button type="button" onClick={onBack} className="text-[#6B7280] hover:text-[#e8e8f0] text-sm px-4 py-2 transition">
          ← Back
        </button>
        <button
          type="submit"
          className="bg-[#D4AD5A] hover:bg-[#E0BD6A] text-white px-6 py-2 rounded-lg text-sm font-semibold transition"
        >
          Continue →
        </button>
      </div>
    </form>
  );
};
