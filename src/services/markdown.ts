import remarkEmbedder from '@remark-embedder/core'
import oembedTransformer from '@remark-embedder/transformer-oembed'
import { serialize } from 'next-mdx-remote/serialize'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'

export const parseContent = async (content: string) => {
  return serialize(content, {
    mdxOptions: {
      remarkPlugins: [
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
      ],
      rehypePlugins: [],
    },
  })
}
