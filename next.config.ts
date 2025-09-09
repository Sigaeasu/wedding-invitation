import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/wedding-invitation" : "",
  assetPrefix: isProd ? "/wedding-invitation/" : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/wedding-invitation" : "",
  },
};

export default nextConfig;