import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 80, 85, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
