"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.replace("/login");
    }
  }, [isPending, session, router]);

  if (isPending || !session?.user) {
    return (
      <div className="flex h-screen bg-[#0C0F18] overflow-hidden">
        <aside className="shrink-0 h-screen bg-[#0C0F18] border-r border-[#2E323A] w-[220px] px-5 py-6" />
        <main className="flex-1" />
      </div>
    );
  }

  return <>{children}</>;
}
