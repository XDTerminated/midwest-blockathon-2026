import { clsx, type ClassValue } from "clsx";

import type { Outcome } from "@immivault/shared";

export const cn = (...inputs: ClassValue[]) => {
  return clsx(inputs);
};

export const formatCID = (cid: string, chars = 8): string => {
  if (cid.length <= chars * 2) return cid;
  return `${cid.slice(0, chars)}...${cid.slice(-chars)}`;
};

export const outcomeColor = (outcome: Outcome): string => {
  switch (outcome) {
    case "approved":
      return "bg-[#152515] text-green-400";
    case "denied":
      return "bg-[#2a1515] text-red-400";
    case "pending":
      return "bg-[#2a2510] text-yellow-400";
    case "appealed":
      return "bg-[#152030] text-blue-400";
    case "withdrawn":
      return "bg-[#1C2030] text-[#9CA3AF]";
    case "remanded":
      return "bg-[#201530] text-purple-400";
    default:
      return "bg-[#1C2030] text-[#9CA3AF]";
  }
};

export const outcomeLabel = (outcome: Outcome): string => {
  if (!outcome) return "Unknown";
  return outcome.charAt(0).toUpperCase() + outcome.slice(1);
};
