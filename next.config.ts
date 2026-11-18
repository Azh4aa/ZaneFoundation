import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { qualities: [75, 90], formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      { source: "/:locale(en|ku)/impact", destination: "/:locale/programs", permanent: false },
      { source: "/:locale(en|ku)/get-involved", destination: "/:locale/partner", permanent: false },
      { source: "/:locale(en|ku)/careers", destination: "/:locale/contact", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
