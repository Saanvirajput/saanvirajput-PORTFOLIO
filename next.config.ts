import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/saanvirajput-PORTFOLIO',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
