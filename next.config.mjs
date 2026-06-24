/** @type {import('next').NextConfig} */
const nextConfig = {
  // The page uses literal characters (apostrophes, quotes) inside terminal
  // snippets on purpose; skip eslint's no-unescaped-entities during builds.
  eslint: { ignoreDuringBuilds: true },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
