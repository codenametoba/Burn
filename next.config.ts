import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["sanity", "next-sanity", "@sanity/sdk-react", "@sanity/workbench"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.sanity.io" }
    ]
  }
};

export default nextConfig;
