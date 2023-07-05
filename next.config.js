/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  extends: [
    'plugin:@next/next/recommended',
  ],
  images: {
    domains: [
      'i.pinimg.com',
      'pbs.twimg.com',
      'cdn-icons-png.flaticon.com',
      'static.wikia.nocookie.net',
      'www.clipartmax.com',
    ],
  },
};

module.exports = nextConfig;
