import { gql } from '@apollo/client'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import apolloClient from '../../src/apolloClient'
import Listing from '../../src/components/Blog/Listing'
import Layout from '../../src/components/Layout'
import Link from '../../src/components/Link'
import { PostType } from '../../src/types'

const Blog = ({ posts }: { posts: PostType[] }) => {
  return (
    <Layout>
      <Head>
        <title>Blog | borales.dev</title>
      </Head>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/" underline="hover">
          Home
        </Link>
        <Typography>Blog</Typography>
      </Breadcrumbs>
      <Typography variant="h2" fontWeight="bold" component="h1">
        Blog
      </Typography>
      <Listing posts={posts} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const recentPosts = await apolloClient.query<{ posts: PostType[] }>({
    query: gql`
      query AllPosts {
        posts(orderBy: date_DESC) {
          slug
          title
          date
        }
      }
    `,
  })

  return {
    props: { posts: recentPosts.data.posts },
  }
}

export default Blog
