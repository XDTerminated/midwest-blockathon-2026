"use client";

import {
  ESCROW_ABI,
  ERC20_ABI,
  CONTRACT_ADDRESSES,
  STAKE_AMOUNT_USDC,
  STAKE_AMOUNT_DISPLAY,
} from "@lumina/shared";
import { Loader2, Lock, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { keccak256, toHex } from "viem";

import { stakeCase } from "@/lib/api";

interface Props {
  cid: string;
  contributorWallet: string;
  onComplete: () => void;
  onSkip: () => void;
}

type StakeState = "idle" | "approving" | "staking" | "registering" | "done" | "error";

export const StakeStep = ({ cid, contributorWallet, onComplete, onSkip }: Props) => {
  const { isConnected } = useAccount();
  const [state, setState] = useState<StakeState>("idle");
  const [error, setError] = useState<string | null>(null);

  const cidHash = keccak256(toHex(cid));

  const contracts = CONTRACT_ADDRESSES.baseSepolia;
  const hasContracts = (contracts.escrow as string) !== "" && (contracts.usdc as string) !== "";

  const { writeContractAsync } = useWriteContract();
  const [txHash, setTxHash] = useState<`0x${string}` | undefined>();
  const [stakeTxHash, setStakeTxHash] = useState<`0x${string}` | undefined>();
  const { isLoading: waitingTx } = useWaitForTransactionReceipt({ hash: txHash });

  const handleStake = async () => {
    if (!hasContracts) {
      setError("Escrow contracts are not deployed. Please deploy contracts to Base Sepolia and update CONTRACT_ADDRESSES before staking.");
      setState("error");
      return;
    }

    if (!isConnected) {
      setError("Please connect your wallet before staking.");
      setState("error");
      return;
    }

    try {
      // Step 1: Approve USDC spend.
      setState("approving");
      const approveTx = await writeContractAsync({
        address: contracts.usdc,
        abi: ERC20_ABI,
        functionName: "approve",
        args: [contracts.escrow, STAKE_AMOUNT_USDC],
      });
      setTxHash(approveTx);

      // Step 2: Stake and register.
      setState("staking");
      const stakeTx = await writeContractAsync({
        address: contracts.escrow,
        abi: ESCROW_ABI,
        functionName: "stakeAndRegister",
        args: [cidHash as `0x${string}`],
      });
      setTxHash(stakeTx);
      setStakeTxHash(stakeTx);

      // Step 3: Register in our DB.
      setState("registering");
      await stakeCase(cid, cidHash, contributorWallet, stakeTx);
      setState("done");
      setTimeout(onComplete, 1500);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Transaction failed";
      setError(msg.includes("User rejected") ? "Transaction cancelled" : msg);
      setState("error");
    }
  };

  return (
    <div className="text-center py-8 space-y-6">
      <div className="flex justify-center">
        <div className="bg-[#1a1a0f] border border-[#C9A54E]/30 rounded-full p-4">
          <Lock className="w-10 h-10 text-[#C9A54E]" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-[#e8e8f0] mb-2">Stake to Publish</h2>
        <p className="text-[#8a8ea0] text-sm max-w-md mx-auto">
          Stake <span className="text-[#C9A54E] font-semibold">${STAKE_AMOUNT_DISPLAY} USDC</span> to
          publish your case. Your stake will be released after community verification or 2 minutes,
          whichever comes first.
        </p>
      </div>

      {/* CID display. */}
      <div className="bg-[#161A24] border border-[#2E323A] rounded-lg p-3 max-w-sm mx-auto">
        <p className="text-xs text-[#2E323A] mb-1">Case CID</p>
        <p className="font-mono text-xs text-[#C9A54E] break-all">{cid}</p>
      </div>

      {state === "done" ? (
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-green-400">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Staked successfully!</span>
          </div>
          {stakeTxHash && (
            <a
              href={`https://sepolia.basescan.org/tx/${stakeTxHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#C9A54E] hover:underline"
            >
              View receipt on BaseScan
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      ) : state === "error" ? (
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-red-400 max-w-md mx-auto">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span className="text-sm text-left">{error}</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => { setState("idle"); setError(null); }}
              className="text-sm text-[#C9A54E] hover:underline"
            >
              Try again
            </button>
            <button
              onClick={onSkip}
              className="text-sm text-[#2E323A] hover:text-[#8a8ea0] transition"
            >
              Skip staking
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <button
            onClick={handleStake}
            disabled={state !== "idle"}
            className="bg-[#C9A54E] hover:bg-[#d4a030] disabled:opacity-50 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2 mx-auto"
          >
            {state !== "idle" || waitingTx ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {state === "approving" && "Approving USDC..."}
                {state === "staking" && "Staking..."}
                {state === "registering" && "Registering..."}
              </>
            ) : (
              `Stake $${STAKE_AMOUNT_DISPLAY} USDC`
            )}
          </button>
          <button
            onClick={onSkip}
            className="text-sm text-[#2E323A] hover:text-[#8a8ea0] transition"
          >
            Skip staking (upload without earning)
          </button>
        </div>
      )}
    </div>
  );
};
