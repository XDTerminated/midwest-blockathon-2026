"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import { WagmiProvider } from "wagmi";

import { NavigationProgress } from "@/components/NavigationProgress";
import { LanguageProvider } from "@/lib/i18n";
import { wagmiConfig } from "@/lib/wagmi-config";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
