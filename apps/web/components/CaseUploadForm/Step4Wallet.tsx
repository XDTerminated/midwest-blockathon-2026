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
      <p className="text-[#2E323A] text-sm">
        When someone pays to view your case,{" "}
        <strong className="text-[#C9A54E]">$0.10 USDC</strong> is sent directly to
        your wallet on the Base network. This field is optional — you can skip it to contribute
        anonymously without earning.
      </p>

      <div className="bg-[#161A24] border border-[#2E323A] rounded-lg p-4 text-sm">
        <p className="font-semibold text-[#C9A54E] mb-2">How contributor earnings work</p>
        <ul className="list-disc pl-4 space-y-1 text-[#2E323A]">
          <li>Every full case view costs $0.10 USDC on Base</li>
          <li>Payment goes directly to your wallet address</li>
          <li>No platform fee — 100% to the contributor</li>
          <li>You can leave this blank to contribute anonymously</li>
        </ul>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#8a8ea0] mb-1">
          Wallet Address (optional)
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={data.contributorWallet ?? ""}
            onChange={(e) => onChange({ contributorWallet: e.target.value })}
            placeholder="0x... (Base network)"
            className="flex-1 bg-[#0C0F18] border border-[#2E323A] text-[#e8e8f0] placeholder-[#2E323A] rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C9A54E] transition"
          />
          {isConnected ? (
            <button
              type="button"
              onClick={useConnectedWallet}
              className="shrink-0 text-sm bg-[#161A24] text-[#C9A54E] border border-[#2E323A] px-3 py-2 rounded-lg hover:border-[#C9A54E] transition whitespace-nowrap"
            >
              Use Connected
            </button>
          ) : (
            <button
              type="button"
              onClick={() => connect({ connector: injected() })}
              className="shrink-0 text-sm bg-[#161A24] text-[#2E323A] border border-[#2E323A] px-3 py-2 rounded-lg hover:text-[#e8e8f0] hover:border-[#C9A54E] transition flex items-center gap-1 whitespace-nowrap"
            >
              <Wallet className="w-3.5 h-3.5" />
              Connect
            </button>
          )}
        </div>
        <p className="text-xs text-[#2E323A] mt-1">
          Only Base-compatible wallets (MetaMask, Coinbase Wallet, etc.)
        </p>
      </div>

      <div className="flex justify-between pt-2">
        <button type="button" onClick={onBack} className="text-[#2E323A] hover:text-[#e8e8f0] text-sm px-4 py-2 transition">
          ← Back
        </button>
        <button
          type="submit"
          className="bg-[#C9A54E] hover:bg-[#d4a030] text-white px-6 py-2 rounded-lg text-sm font-semibold transition"
        >
          Continue →
        </button>
      </div>
    </form>
  );
};
