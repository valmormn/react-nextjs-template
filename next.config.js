/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: false
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'media.graphcms.com',
      'assets.vercel.com',
      'https://upload.wikimedia.org'
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  },
  async redirects() {
    return [
      {
        source: '/shop/item',
        destination: '/shop',
        permanent: true
      },
      {
        source: '/blog/:slug',
        destination: '/blog',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
