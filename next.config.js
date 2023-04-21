/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'imgix.cosmicjs.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.optimization.splitChunks.cacheGroups = {};
    config.optimization.minimize = true;
    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  }
};

module.exports = nextConfig;
