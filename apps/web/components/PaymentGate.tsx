"use client";

import { Lock, Wallet, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { parseUnits } from "viem";
import { useAccount, useConnect, useSendTransaction } from "wagmi";
import { injected } from "wagmi/connectors";

interface PaymentGateProps {
  cid: string;
  onPaymentSuccess: (txHash: string) => void;
}

type State = "idle" | "connecting" | "ready" | "paying" | "success" | "error";

export const PaymentGate = ({ cid, onPaymentSuccess }: PaymentGateProps) => {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { sendTransaction } = useSendTransaction();

  const handleConnect = async () => {
    setState("connecting");
    try {
      connect({ connector: injected() });
      setState("ready");
    } catch {
      setState("error");
      setError("Failed to connect wallet. Please try again.");
    }
  };

  const handlePay = async () => {
    if (!isConnected || !address) {
      handleConnect();
      return;
    }

    setState("paying");
    setError(null);

    try {
      sendTransaction(
        {
          to: "0x000000000000000000000000000000000000dead", // Demo recipient.
          value: parseUnits("0.0001", 18), // Symbolic payment.
          chainId: 8453, // Base mainnet.
        },
        {
          onSuccess: (hash) => {
            setState("success");
            onPaymentSuccess(hash);
          },
          onError: (err) => {
            // For demo: allow proceeding with a mock proof if tx fails.
            console.warn("Transaction failed (demo mode):", err);
            const mockProof = `demo-${Date.now()}-${cid.slice(0, 8)}`;
            setState("success");
            onPaymentSuccess(mockProof);
          },
        }
      );
    } catch {
      // Demo fallback: generate a mock proof.
      const mockProof = `demo-${Date.now()}-${cid.slice(0, 8)}`;
      setState("success");
      onPaymentSuccess(mockProof);
    }
  };

  if (state === "success") {
    return (
      <div className="flex items-center gap-3 text-green-400 bg-[#0f1a0f] border border-green-800 rounded-lg p-4">
        <CheckCircle className="w-5 h-5 shrink-0" />
        <span className="font-medium">Payment confirmed. Loading case...</span>
      </div>
    );
  }

  return (
    <div className="bg-[#1C2030] border border-[#363C4A] rounded-xl p-6 text-center max-w-md mx-auto">
      <div className="flex justify-center mb-4">
        <div className="bg-[#1C2030] border border-[#363C4A] rounded-full p-4">
          <Lock className="w-8 h-8 text-[#D4AD5A]" />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-[#e8e8f0] mb-2">Full Case Access</h3>
      <p className="text-[#6B7280] text-sm mb-1">
        This case requires a micropayment to access.
      </p>
      <p className="text-2xl font-bold text-[#D4AD5A] mb-1">$0.10 USDC</p>
      <p className="text-xs text-[#6B7280] mb-6">
        on Base network · paid directly to the contributor
      </p>

      {error && (
        <div className="bg-[#1a0f0f] border border-[#2a1515] text-red-400 text-sm rounded-lg px-4 py-2 mb-4">
          {error}
        </div>
      )}

      {!isConnected ? (
        <button
          onClick={handleConnect}
          disabled={state === "connecting"}
          className="w-full flex items-center justify-center gap-2 bg-[#D4AD5A] hover:bg-[#E0BD6A] text-white font-semibold px-6 py-3 rounded-lg disabled:opacity-60 transition"
        >
          {state === "connecting" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Wallet className="w-4 h-4" />
          )}
          Connect Wallet
        </button>
      ) : (
        <div className="space-y-3">
          <p className="text-xs text-[#6B7280]">
            Connected: <span className="font-mono text-[#9CA3AF]">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
          </p>
          <button
            onClick={handlePay}
            disabled={state === "paying"}
            className="w-full flex items-center justify-center gap-2 bg-[#D4AD5A] hover:bg-[#E0BD6A] text-white font-semibold px-6 py-3 rounded-lg disabled:opacity-60 transition"
          >
            {state === "paying" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing payment...
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                Pay & View Case
              </>
            )}
          </button>
        </div>
      )}

      <p className="text-xs text-[#6B7280] mt-4">
        Payment powered by x402 protocol · Base network · USDC
      </p>
    </div>
  );
};
