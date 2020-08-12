const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [
    require('remark-slug'),
    [
      require('remark-autolink-headings'),
      {
        content: {
          type: 'text',
          value: '#',
        },
        behavior: 'append',
      },
    ],
    [
      require('@agentofuser/remark-oembed'),
      {
        replaceParent: true,
      },
    ],
  ],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => ({
      slug: frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', ''),
    }),
    // phase: 'prebuild|loader|both',
  },
})({
  target: 'serverless',
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }

    return config
  },
})
