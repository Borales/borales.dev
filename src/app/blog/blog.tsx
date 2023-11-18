'use client'

import { PostType } from '@@app/types'
import BlogListing from '@@components/Blog/Listing'
import { Breadcrumbs } from './breadcrumbs'

export default function BlogContent({ posts }: { posts: PostType[] }) {
  return (
    <>
      <Breadcrumbs />
      <h1>Blog</h1>
      <BlogListing posts={posts} />
    </>
  )
}
