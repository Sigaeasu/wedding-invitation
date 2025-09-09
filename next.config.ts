import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/wedding-invitation",
  assetPrefix: "/wedding-invitation/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
