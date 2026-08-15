import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  isDev ? "'unsafe-eval'" : "",
  "https://www.google.com",
  "https://www.gstatic.com",
  "https://maps.googleapis.com",
].filter(Boolean).join(" ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; " +
      `script-src ${scriptSrc}; ` +
      "style-src 'self' 'unsafe-inline'; " +
      "font-src 'self' data:; " +
      "connect-src 'self' data: blob: https://maps.googleapis.com; " +
      "img-src 'self' data: blob: https://images.unsplash.com https://plus.unsplash.com https://images.pexels.com https://maps.googleapis.com https://maps.gstatic.com; " +
      "frame-src 'self' https://www.google.com https://maps.google.com; " +
      "frame-ancestors 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self';",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/admin/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;