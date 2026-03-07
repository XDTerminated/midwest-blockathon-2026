"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { signUp, useSession } from "@/lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isPending && session?.user) {
    router.replace("/search");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: authError } = await signUp.email({
      name,
      email,
      password,
    });

    setLoading(false);

    if (authError) {
      setError(authError.message ?? "Sign up failed");
      return;
    }

    router.push("/search");
  };

  return (
    <div className="min-h-screen bg-[#121620] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-[#e8e8f0] text-center mb-8">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs text-[#9CA3AF] mb-1.5">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#1C2030] border border-[#363C4A] rounded-[10px] px-3 py-2.5 text-sm text-[#e8e8f0] placeholder-[#6B7280] outline-none focus:border-[#D4AD5A] transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-xs text-[#9CA3AF] mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#1C2030] border border-[#363C4A] rounded-[10px] px-3 py-2.5 text-sm text-[#e8e8f0] placeholder-[#6B7280] outline-none focus:border-[#D4AD5A] transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-xs text-[#9CA3AF] mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="w-full bg-[#1C2030] border border-[#363C4A] rounded-[10px] px-3 py-2.5 text-sm text-[#e8e8f0] placeholder-[#6B7280] outline-none focus:border-[#D4AD5A] transition"
              placeholder="Min 8 characters"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#D4AD5A] text-[#121620] font-medium text-sm py-2.5 rounded-[10px] hover:bg-[#E0BD6A] transition disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-xs text-[#6B7280] mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-[#D4AD5A] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
