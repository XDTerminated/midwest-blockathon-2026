"use client";

import { AuthGuard } from "@/components/AuthGuard";
import { Sidebar } from "./Sidebar";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGuard>
      <div className="flex h-screen bg-[#0C0F18] overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </AuthGuard>
  );
};
