const withImages = require('next-images')
module.exports = withImages({
  images: {
    domains: ['df17fp68uwcso.cloudfront.net', 'res.cloudinary.com'],
  },
  webpack: (config, { isServer }) => {
    return config
  }
})

// const nextConfig = {
//   reactStrictMode: true,
// }

// const { withSuperjson } = require('next-superjson')

// module.exports = withSuperjson()(nextConfig)