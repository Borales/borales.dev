import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // Enable React 19 Compiler for automatic optimizations
  reactCompiler: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'avatars2.githubusercontent.com' }]
  }
}

const shouldAnalyze = process.env.ANALYZE === 'true'
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: true })

// Avoid having a warning in the console about turbopack not being used
export default shouldAnalyze ? withBundleAnalyzer(nextConfig) : nextConfig
