import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  webpack: (config) => {
    config.watchOptions = {
      poll: 500,
      aggregateTimeout: 500,
    };
    return config;
  },
};

export default nextConfig;