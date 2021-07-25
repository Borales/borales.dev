import Link from 'next/link'
import { Text } from '@geist-ui/react'

export default function BlogListing({ posts = [] }) {
  if (!posts.length) {
    return <Text h3>No posts</Text>
  }

  return (
    <ul>
      {posts.map(({ slug, frontmatter: { title } }) => (
        <li key={slug}>
          <Link href={`/blog/${slug}`}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
