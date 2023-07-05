'use client'

import { PostType } from '@@app/types'
import BlogListing from '@@components/Blog/Listing'
import Layout from '@@components/Layout'
import Link from '@@components/Link'
import { Breadcrumbs, Typography } from '@mui/material'

export default function BlogContent({ posts }: { posts: PostType[] }) {
  return (
    <Layout>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/" underline="hover">
          Home
        </Link>
        <Typography>Blog</Typography>
      </Breadcrumbs>

      <Typography variant="h2" fontWeight="bold" component="h1">
        Blog
      </Typography>

      <BlogListing posts={posts} />
    </Layout>
  )
}
