const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '/dist',
}

module.exports = withNextIntl(nextConfig)
