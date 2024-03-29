export const dynamic = 'force-dynamic'
export const revalidate = 86400 // 24 hours

import { getAllPosts } from '@@app/graphql/posts'
import BlogContent from './blog'

export default async function Blog() {
  'use server'
  const posts = await getAllPosts()

  return <BlogContent posts={posts} />
}
