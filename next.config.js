const withReactSvg = require('next-react-svg')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = withReactSvg({
  reactStrictMode: true,
  swcMinify: true,
  include: path.resolve(__dirname, 'src/assets'),
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
})

module.exports = nextConfig
