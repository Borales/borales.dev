import Head from 'next/head'
import Link from 'next/link'
import { Text, Breadcrumbs } from '@geist-ui/react'
import Layout from '../../components/Layout'
import Listing from '../../components/Blog/Listing'
import { getAllPosts } from '../../service/blogManager'

const Blog = ({ posts }) => {
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
      <Listing posts={posts} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts()

  return {
    props: { posts },
  }
}

export default Blog
