import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Xuất tĩnh hoàn toàn (SSG) -> thư mục ./out, tối ưu cho hosting tĩnh/CDN
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
