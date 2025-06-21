import remarkEmbedder from '@remark-embedder/core'
import oembedTransformer from '@remark-embedder/transformer-oembed'
import { serialize } from 'next-mdx-remote-client/serialize'
import rehypeAutolinkHeadings, {
  Options as AutolinkOptions
} from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export const parseContent = async (content: string) => {
  return serialize({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [
          [
            remarkEmbedder,
            {
              transformers: [[oembedTransformer, { params: {} }]]
            }
          ],
          remarkGfm
        ],
        rehypePlugins: [
          rehypeSlug,
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
    }
  })
}
