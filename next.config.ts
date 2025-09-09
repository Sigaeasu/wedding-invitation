import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/wedding-invitation" : "",
  assetPrefix: isProd ? "/wedding-invitation/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;