export const dynamic = 'force-dynamic'

import { getAllPosts } from '@@app/graphql/posts'
import BlogContent from './blog'

export default async function Blog() {
  const posts = await getAllPosts()

  return <BlogContent posts={posts} />
}
