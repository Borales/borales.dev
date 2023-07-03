export const dynamic = 'force-dynamic'

import { getLastPosts } from '@@app/graphql/posts'
import HomeContent from './home'

export default async function Home() {
  const posts = await getLastPosts()

  return <HomeContent posts={posts} />
}
