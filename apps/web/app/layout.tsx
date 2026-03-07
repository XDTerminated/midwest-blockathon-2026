import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "@/components/layout/Providers";

export const metadata: Metadata = {
  title: "Lumina — Community Immigration Legal Research",
  description:
    "Community-powered immigration legal research. Real anonymized cases, AI-assisted search, and micropayments for contributors.",
};

const RootLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Questrial&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-[#121620] text-[#e8e8f0] font-questrial">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
