import remarkEmbedder from '@remark-embedder/core'
import oembedTransformer from '@remark-embedder/transformer-oembed'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings, {
  Options as AutolinkOptions
} from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'

export const parseContent = async (content: string) => {
  return serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        [
          remarkEmbedder,
          {
            transformers: [[oembedTransformer, { params: {} }]]
          }
        ],
        remarkSlug,
        remarkGfm
      ],
      rehypePlugins: [
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            content: {
              type: 'text',
              value: '#'
            }
          } as AutolinkOptions
        ]
      ]
    }
  })
}
