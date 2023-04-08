/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['media.discordapp.net', 'th.bing.com'],
  },
}

module.exports = nextConfig
