"use client";

import { Upload } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { LandingSearchBar } from "@/components/LandingSearchBar";
import { LuminaLogo } from "@/components/LuminaLogo";
import { signOut, useSession } from "@/lib/auth-client";

const Flame = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 96" fill="none" className={className}>
    {/* Candle body */}
    <rect x="20" y="40" width="24" height="52" rx="4" fill="#d4c89a" />
    <rect x="20" y="40" width="24" height="52" rx="4" fill="url(#candleShade)" />
    {/* Wick */}
    <rect x="30" y="32" width="4" height="12" rx="2" fill="#4a4a3a" />
    {/* Flame outer */}
    <path d="M32 4 C26 16, 20 24, 22 32 C24 38, 28 40, 32 40 C36 40, 40 38, 42 32 C44 24, 38 16, 32 4Z" fill="url(#flameOuter)" className="flame-flicker" style={{ transformOrigin: "32px 32px" }} />
    {/* Flame inner */}
    <path d="M32 14 C29 20, 26 26, 28 32 C29 36, 31 38, 32 38 C33 38, 35 36, 36 32 C38 26, 35 20, 32 14Z" fill="url(#flameInner)" className="flame-flicker" style={{ transformOrigin: "32px 30px", animationDelay: "0.15s" }} />
    <defs>
      <linearGradient id="flameOuter" x1="32" y1="4" x2="32" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFD54F" />
        <stop offset="40%" stopColor="#FF9800" />
        <stop offset="100%" stopColor="#E65100" />
      </linearGradient>
      <linearGradient id="flameInner" x1="32" y1="14" x2="32" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF9C4" />
        <stop offset="60%" stopColor="#FFE082" />
        <stop offset="100%" stopColor="#FFB74D" />
      </linearGradient>
      <linearGradient id="candleShade" x1="20" y1="40" x2="44" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0.12)" />
      </linearGradient>
    </defs>
  </svg>
);

const Home = () => {
  const { data: session } = useSession();
  const [phase, setPhase] = useState<"dark" | "glow" | "reveal">("dark");

  useEffect(() => {
    // Flame appears in darkness, then light expands, then content reveals
    const glowTimer = setTimeout(() => setPhase("glow"), 400);
    const revealTimer = setTimeout(() => setPhase("reveal"), 1200);
    return () => {
      clearTimeout(glowTimer);
      clearTimeout(revealTimer);
    };
  }, []);

  const isDark = phase === "dark";
  const isRevealed = phase === "reveal";

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#050508]">
      {/* Background that fades in as candle lights the scene */}
      <div
        className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
        style={{
          background: "linear-gradient(180deg, #1a1e2e 0%, #1c2133 8%, #1a1f30 20%, #151a26 40%, #121620 60%)",
          opacity: isRevealed ? 1 : 0,
        }}
      />

      {/* Candlelight radial glow — grows outward from center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-[1200ms] ease-in-out"
        style={{
          width: isDark ? "0px" : isRevealed ? "200vmax" : "300px",
          height: isDark ? "0px" : isRevealed ? "200vmax" : "300px",
          background: "radial-gradient(circle, rgba(212,173,90,0.12) 0%, rgba(212,173,90,0.04) 40%, transparent 70%)",
          opacity: isDark ? 0 : 1,
        }}
      />

      {/* Candle flame — centered, always visible once phase > dark */}
      <div
        className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none transition-all duration-[800ms] ease-in-out"
        style={{
          opacity: isRevealed ? 0 : 1,
          transform: isRevealed ? "translateY(-120px) scale(0.5)" : "translateY(0) scale(1)",
        }}
      >
        <div className={`relative ${isDark ? "opacity-0" : "flame-fade-in"}`}>
          <Flame className="w-16 h-24" />
          {/* Warm glow behind flame */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full -z-10 transition-all duration-[900ms]"
            style={{
              width: isDark ? "0px" : "200px",
              height: isDark ? "0px" : "200px",
              background: "radial-gradient(circle, rgba(212,173,90,0.35) 0%, rgba(212,173,90,0.1) 40%, transparent 70%)",
            }}
          />
        </div>
      </div>

      {/* Dark overlay — starts opaque, fades as candle illuminates */}
      <div
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-[1200ms] ease-in-out"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 0%, #050508 60%)",
          opacity: isRevealed ? 0 : isDark ? 1 : 0.85,
        }}
      />

      {/* Top-left logo */}
      <div className={`fixed top-6 left-6 z-10 ${isRevealed ? "content-reveal" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
        <LuminaLogo />
      </div>

      {/* Top-right nav. */}
      <div className={`fixed top-6 right-6 z-10 flex items-center gap-3 ${isRevealed ? "content-reveal" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
        {session?.user ? (
          <>
            <span className="text-sm text-[#9CA3AF]">{session.user.name}</span>
            <button
              onClick={() => signOut()}
              className="text-sm text-[#6B7280] hover:text-[#e8e8f0] transition"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="text-sm text-[#9CA3AF] hover:text-[#e8e8f0] transition"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-[#D4AD5A] hover:bg-[#E0BD6A] text-[#121620] text-sm font-medium px-4 py-2 rounded-lg transition"
            >
              Sign up
            </Link>
          </>
        )}
        <Link
          href="/upload"
          className="flex items-center gap-2 bg-[#1C2030] border border-[#363C4A] hover:border-[#D4AD5A] text-[#e8e8f0] text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          <Upload className="w-4 h-4" />
          Upload
        </Link>
      </div>

      {/* Hero. */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24 relative z-10">
        <h1 className={`text-5xl sm:text-6xl font-bold text-center leading-tight mb-6 max-w-2xl text-white ${isRevealed ? "content-reveal" : "opacity-0"}`} style={{ animationDelay: "0s" }}>
          Find Cases Like{" "}
          <span className="text-[#D4AD5A] italic underline">Yours</span>
          <br />
          Own the Knowledge
        </h1>

        <p className={`text-[#9CA3AF] text-lg text-center max-w-xl mb-12 leading-relaxed ${isRevealed ? "content-reveal" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
          Real case outcomes from real immigrants stored on tamper-proof blockchain infrastructure. Cite any case by its IPFS CID. Nobody can alter or delete it.
        </p>

        <div className={`w-full flex justify-center ${isRevealed ? "content-reveal" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          <LandingSearchBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
