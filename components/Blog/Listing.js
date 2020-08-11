import Link from 'next/link'
import { Text } from '@zeit-ui/react'
import { getSlug } from '../../service/blogManager'

export default function BlogListing({ posts = [] }) {
  if (!posts.length) {
    return <Text h3>No posts</Text>
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.__resourcePath}>
          <Link href={`/blog/${getSlug(post.__resourcePath)}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
