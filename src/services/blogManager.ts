import remarkEmbedder from '@remark-embedder/core'
import oembedTransformer from '@remark-embedder/transformer-oembed'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'

process.env.ESBUILD_BINARY_PATH = path.join(
  process.cwd(),
  'node_modules',
  'esbuild',
  'bin',
  'esbuild'
)

export const parseContent = async (content: string) => {
  const { code } = await bundleMDX({
    source: content,
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [
          remarkEmbedder,
          {
            transformers: [[oembedTransformer, { params: {} }]],
          },
        ],
        remarkSlug,
        remarkGfm,
        [
          remarkAutolinkHeadings,
          {
            content: {
              type: 'text',
              value: '#',
            },
            behavior: 'append',
          },
        ],
      ] as any
      options.rehypePlugins = [...(options.rehypePlugins ?? [])]

      return options
    },
  })

  return code
}
