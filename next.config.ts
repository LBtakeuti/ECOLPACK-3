import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'export' mode to enable dynamic features for CMS
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;