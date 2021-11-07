require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      // https://github.com/vercel/next.js/issues/7755
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          child_process: false,
          fs: false,
          dns: false,
          net: false,
          tls: false,
          http2: false,
          'builtin-modules': false,
          worker_threads: false,
        },
      }
    }

    return config
  },
}
