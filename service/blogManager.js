import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import remarkSlug from 'remark-slug'
import remarkGfm from 'remark-gfm'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import remarkOembed from 'remark-oembed'

process.env.ESBUILD_BINARY_PATH = path.join(
  process.cwd(),
  'node_modules',
  'esbuild',
  'bin',
  'esbuild'
)

export const BLOG_PATH = path.join(process.cwd(), 'data/blog')

export const getSourceOfFile = (fileName) =>
  fs.readFileSync(path.join(BLOG_PATH, fileName), 'utf8')

/**
 * @returns {Array<{frontmatter: {title: string, publishedAt: Date}, slug: string }>}
 */
export const getAllPosts = () => {
  return fs
    .readdirSync(BLOG_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName)
      const slug = fileName.replace(/\.mdx?$/, '')
      const { data } = matter(source)

      return {
        frontmatter: data,
        slug: slug,
      }
    })
    .sort(
      (
        { frontmatter: { publishedAt: dateA } },
        { frontmatter: { publishedAt: dateB } }
      ) => (`${dateA}` < `${dateB}` ? 1 : -1)
    )
}

export const getRecentPosts = (limit) => {
  const posts = getAllPosts()

  return posts.slice(0, limit ?? posts.length)
}

export const getSinglePost = async (slug) => {
  const source = getSourceOfFile(slug + '.mdx')

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: BLOG_PATH,
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkSlug,
        remarkGfm,
        remarkOembed({ jsx: true }),
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
      ]
      options.rehypePlugins = [...(options.rehypePlugins ?? [])]

      return options
    },
  })

  return {
    frontmatter,
    code,
  }
}
