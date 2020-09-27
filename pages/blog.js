import Head from 'next/head'
import Link from 'next/link'
import { Text, Breadcrumbs } from '@geist-ui/react'
import Layout from '../components/Layout'
import Listing from '../components/Blog/Listing'
import { sortPosts } from '../service/blogManager'

import { frontMatter as blogPosts } from './blog/**.mdx'

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog | borales.dev</title>
      </Head>
      <Breadcrumbs>
        <Link href="/">
          <Breadcrumbs.Item href="/" nextLink>
            Home
          </Breadcrumbs.Item>
        </Link>
        <Breadcrumbs.Item>Blog</Breadcrumbs.Item>
      </Breadcrumbs>
      <Text h1>Blog</Text>
      <Listing posts={sortPosts(blogPosts)} />
    </Layout>
  )
}
