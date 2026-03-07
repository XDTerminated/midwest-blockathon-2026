"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  if (!isPending && session?.user) {
    router.replace("/search");
    return null;
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: authError } = await signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (authError) {
      setError(authError.message ?? "Login failed");
      return;
    }

    router.push("/search");
  }

  return (
    <div className="min-h-screen bg-[#0C0F18] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-[#e8e8f0] text-center mb-8">
          Log In
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs text-[#8a8ea0] mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#161A24] border border-[#2E323A] rounded-[10px] px-3 py-2.5 text-sm text-[#e8e8f0] placeholder-[#2E323A] outline-none focus:border-[#C9A54E] transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-xs text-[#8a8ea0] mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#161A24] border border-[#2E323A] rounded-[10px] px-3 py-2.5 text-sm text-[#e8e8f0] placeholder-[#2E323A] outline-none focus:border-[#C9A54E] transition"
              placeholder="Your password"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C9A54E] text-[#0C0F18] font-medium text-sm py-2.5 rounded-[10px] hover:bg-[#d4b45e] transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="text-center text-xs text-[#2E323A] mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#C9A54E] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
