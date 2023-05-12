/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.pinimg.com','pbs.twimg.com','cdn-icons-png.flaticon.com'],
  },
};

module.exports = nextConfig;
