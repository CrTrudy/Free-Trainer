import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const isDev = process.env.NEXT_PHASE === PHASE_DEVELOPMENT_SERVER || process.env.NODE_ENV === "development";
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = isDev ? undefined : basePathEnv || undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Im lokalen Dev kein basePath; fuer GitHub Pages per Env setzen (z. B. /Free-Trainer)
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
