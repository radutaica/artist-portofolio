import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w3xdjtdixpgqzl4k.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
