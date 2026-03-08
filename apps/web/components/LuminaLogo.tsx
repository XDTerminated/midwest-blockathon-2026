"use client";

import Link from "next/link";

const FlameIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 96" fill="none" className={className}>
    <rect x="20" y="40" width="24" height="52" rx="4" fill="#d4c89a" />
    <rect x="20" y="40" width="24" height="52" rx="4" fill="url(#logoCandle)" />
    <rect x="30" y="32" width="4" height="12" rx="2" fill="#4a4a3a" />
    <path d="M32 4 C26 16, 20 24, 22 32 C24 38, 28 40, 32 40 C36 40, 40 38, 42 32 C44 24, 38 16, 32 4Z" fill="url(#logoFlameOuter)" className="flame-flicker" style={{ transformOrigin: "32px 32px" }} />
    <path d="M32 14 C29 20, 26 26, 28 32 C29 36, 31 38, 32 38 C33 38, 35 36, 36 32 C38 26, 35 20, 32 14Z" fill="url(#logoFlameInner)" className="flame-flicker" style={{ transformOrigin: "32px 30px", animationDelay: "0.15s" }} />
    <defs>
      <linearGradient id="logoFlameOuter" x1="32" y1="4" x2="32" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFD54F" />
        <stop offset="40%" stopColor="#FF9800" />
        <stop offset="100%" stopColor="#E65100" />
      </linearGradient>
      <linearGradient id="logoFlameInner" x1="32" y1="14" x2="32" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF9C4" />
        <stop offset="60%" stopColor="#FFE082" />
        <stop offset="100%" stopColor="#FFB74D" />
      </linearGradient>
      <linearGradient id="logoCandle" x1="20" y1="40" x2="44" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0.12)" />
      </linearGradient>
    </defs>
  </svg>
);

export const LuminaLogo = ({ size = "md" }: { size?: "sm" | "md" }) => {
  const iconSize = size === "sm" ? "w-6 h-9" : "w-8 h-12";
  const textSize = size === "sm" ? "text-xl" : "text-3xl";

  return (
    <Link href="/" className="flex items-center gap-1.5">
      <FlameIcon className={iconSize} />
      <span className={`${textSize} font-bold text-[#D4AD5A] font-quantico tracking-wide`}>
        Lumina
      </span>
    </Link>
  );
};
