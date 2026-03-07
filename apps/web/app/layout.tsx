import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";

export const metadata: Metadata = {
  title: "ImmiVault — Community Immigration Legal Research",
  description:
    "Community-powered immigration legal research. Real anonymized cases, AI-assisted search, and micropayments for contributors.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#0C0F18] text-[#e8e8f0]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
