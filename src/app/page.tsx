export const dynamic = 'force-dynamic'
export const revalidate = 86400 // 24 hours

import { getLastPosts } from '@@app/graphql/posts'
import HomeContent from './home'

export default async function Home() {
  'use server'
  const posts = await getLastPosts()

  return <HomeContent posts={posts} />
}
