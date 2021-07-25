import { Breadcrumbs, Spacer, Text, Grid, Note } from '@geist-ui/react'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'
import DateFormat from '../../components/DateFormat'
import User from '../../components/User'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from '../../service/blogManager'

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title} | borales.dev</title>
        <meta
          property="article:published_time"
          content={new Date(frontmatter.publishedAt).toISOString()}
        />
      </Head>
      <Breadcrumbs>
        <Link href="/">
          <Breadcrumbs.Item href="/" nextLink>
            Home
          </Breadcrumbs.Item>
        </Link>
        <Link href="/blog">
          <Breadcrumbs.Item href="/blog" nextLink>
            Blog
          </Breadcrumbs.Item>
        </Link>
        <Breadcrumbs.Item>{frontmatter.title}</Breadcrumbs.Item>
      </Breadcrumbs>

      <h1>{frontmatter.title}</h1>
      <Grid.Container alignItems="center" justify="space-between">
        <Grid>
          <User />
        </Grid>
        <Grid>
          <Text small title={frontmatter.publishedAt} style={{ color: 'grey' }}>
            <DateFormat date={frontmatter.publishedAt} />
          </Text>
        </Grid>
      </Grid.Container>
      <Spacer y={1} />

      {frontmatter.summary && <Note label={false}>{frontmatter.summary}</Note>}
      <Component />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug)
  return {
    props: { ...post },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default Post
