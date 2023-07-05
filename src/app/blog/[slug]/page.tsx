export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 86400 // 24 hours

import { getPost } from '@@app/graphql/post'
import { getLastPosts } from '@@app/graphql/posts'
import { formatDate } from '@@app/helpers/formatDate'
import { parseContent } from '@@app/services/markdown'
import { notFound } from 'next/navigation'
import BlogPostContent from './post'

export async function generateStaticParams() {
  const posts = await getLastPosts(10)
  return posts.map(({ slug }) => ({ slug }))
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const content = await parseContent(post.content)

  return (
    <BlogPostContent
      slug={post.slug}
      date={formatDate(post.date)}
      content={content}
      title={post.title}
    />
  )
}
