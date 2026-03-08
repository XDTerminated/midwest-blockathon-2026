import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@immivault/shared"],
  devIndicators: false,
};

export default nextConfig;
