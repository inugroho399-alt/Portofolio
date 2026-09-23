import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Mencegah halaman ini dimuat di dalam iframe dari domain lain
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Mencegah browser menebak-nebak MIME type (hindari MIME sniffing)
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Hanya kirim referrer saat navigasi ke halaman HTTPS yang sama
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  // Jika nanti perlu optimasi gambar dari domain eksternal, tambahkan di sini:
  // images: {
  //   remotePatterns: [{ hostname: "example.com" }],
  // },
};

export default nextConfig;
