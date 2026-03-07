"use client";

import { Upload } from "lucide-react";
import Link from "next/link";

import { LandingSearchBar } from "@/components/LandingSearchBar";
import { signOut, useSession } from "@/lib/auth-client";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-[#121620] flex flex-col">
      {/* Top-right nav */}
      <div className="fixed top-6 right-6 z-10 flex items-center gap-3">
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

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
        <h1 className="text-5xl sm:text-6xl font-bold text-center leading-tight mb-6 max-w-2xl text-white">
          Find Cases Like{" "}
          <span className="text-[#D4AD5A] italic underline">Yours.</span>
          <br />
          Own the Knowledge.
        </h1>

        <p className="text-[#9CA3AF] text-lg text-center max-w-xl mb-12 leading-relaxed">
          Real case outcomes from real immigrants stored on tamper-proof
          blockchain infrastructure. Cite any case by its IPFS CID. Nobody can
          alter or delete it.
        </p>

        <LandingSearchBar />
      </div>
    </div>
  );
};

export default Home;
