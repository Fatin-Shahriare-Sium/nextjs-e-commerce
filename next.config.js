const withImages = require('next-images')
module.exports = withImages({
    images: {
        domains: ['df17fp68uwcso.cloudfront.net','res.cloudinary.com'],
      },
      webpack: (config, { isServer }) => {
        return config
    }
})