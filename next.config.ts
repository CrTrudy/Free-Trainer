import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Im lokalen Dev ohne Base-Path; für GitHub Pages per Env setzen (z. B. /Free-Trainer)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  images: {
    unoptimized: true,
  },
};
// eslint-disable-next-line import/no-default-export
export default nextConfig;
