/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: false
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'media.graphcms.com',
      'assets.vercel.com'
    ]
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
