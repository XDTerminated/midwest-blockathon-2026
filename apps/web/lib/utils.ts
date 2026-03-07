import { clsx, type ClassValue } from "clsx";
import type { Outcome } from "@immivault/shared";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatCID(cid: string, chars = 8): string {
  if (cid.length <= chars * 2) return cid;
  return `${cid.slice(0, chars)}...${cid.slice(-chars)}`;
}

export function outcomeColor(outcome: Outcome): string {
  switch (outcome) {
    case "approved":
      return "bg-[#0f1a0f] text-green-400";
    case "denied":
      return "bg-[#2a0f0f] text-red-400";
    case "pending":
      return "bg-[#2a230a] text-yellow-400";
    case "appealed":
      return "bg-[#0f1a2a] text-blue-400";
    case "withdrawn":
      return "bg-[#161A24] text-[#8888aa]";
    case "remanded":
      return "bg-[#1a0f2a] text-purple-400";
    default:
      return "bg-[#161A24] text-[#8888aa]";
  }
}

export function outcomeLabel(outcome: Outcome): string {
  if (!outcome) return "Unknown";
  return outcome.charAt(0).toUpperCase() + outcome.slice(1);
}
