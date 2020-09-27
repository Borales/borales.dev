import NextLink from 'next/link'
import { Text, Card } from '@geist-ui/react'
import BlogListing from './Listing'

export default function RecentItems({ recentPosts = [] }) {
  if (!recentPosts.length) {
    return null
  }

  return (
    <Card shadow>
      <Text h4>My recent blog posts</Text>
      <BlogListing posts={recentPosts} />
      <NextLink href="/blog">
        <a>All blog posts &rarr;</a>
      </NextLink>
    </Card>
  )
}
