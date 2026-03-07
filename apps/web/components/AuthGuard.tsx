"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useSession } from "@/lib/auth-client";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.replace("/login");
    }
  }, [isPending, session, router]);

  if (isPending || !session?.user) {
    return (
      <div className="flex h-screen bg-[#121620] overflow-hidden">
        <aside className="shrink-0 h-screen bg-[#121620] border-r border-[#363C4A] w-[220px] px-5 py-6" />
        <main className="flex-1" />
      </div>
    );
  }

  return <>{children}</>;
};
