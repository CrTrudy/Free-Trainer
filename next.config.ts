import type { NextConfig } from "next";

const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "/Free-Trainer";
const normalizedBasePath = repoBasePath === "/" ? "" : repoBasePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: normalizedBasePath || undefined,
  assetPrefix: normalizedBasePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
