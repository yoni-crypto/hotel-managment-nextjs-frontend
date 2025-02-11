import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {hostname: 'images.unsplash.com'},
      {hostname: 'plus.unsplash.com'},
    ],
    },
};

export default nextConfig;
