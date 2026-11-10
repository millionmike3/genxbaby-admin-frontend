/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ADMIN_API_URL: process.env.NEXT_PUBLIC_ADMIN_API_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_PRICING_ENGINE_URL: process.env.NEXT_PUBLIC_PRICING_ENGINE_URL,
  },
  experimental: {
    typedRoutes: false,
  },
};

module.exports = nextConfig;
