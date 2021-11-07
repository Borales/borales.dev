import { formatDate } from '@@app/helpers/formatDate'
import { PostType } from '@@app/types'
import Layout from '@@components/Layout'
import Link from '@@components/Link'
import User from '@@components/User'
import apolloClient from '@@services/apolloClient'
import { parseContent } from '@@services/blogManager'
import { gql } from '@apollo/client'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import GlobalStyles from '@mui/material/GlobalStyles'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { DiscussionEmbed } from 'disqus-react'
import { getMDXComponent } from 'mdx-bundler/client'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

const postGlobalStyles = (
  <GlobalStyles
    styles={{
      'h1 > a, h2 > a, h3 > a, h4 > a, h5 > a,h6 > a': {
        display: 'none',
        paddingLeft: '8px',
      },

      'h1:hover > a, h2:hover > a, h3:hover > a, h4:hover > a, h5:hover > a, h6:hover > a':
        {
          display: 'inline',
        },
    }}
  />
)

const Post = ({ slug, content, title, date }: PostType) => {
  const Component = React.useMemo(() => getMDXComponent(content), [content])
  return (
    <Layout>
      {postGlobalStyles}
      <Head>
        <title>{title} | borales.dev</title>
        <meta
          property="article:published_time"
          content={new Date(date).toISOString()}
        />
      </Head>

      <Breadcrumbs>
        <Link href="/" underline="hover">
          Home
        </Link>
        <Link href="/blog" underline="hover">
          Blog
        </Link>
        <Typography>{title}</Typography>
      </Breadcrumbs>

      <Typography variant="h3" fontWeight="bold" component="h1">
        {title}
      </Typography>

      <Grid container alignContent="center" justifyContent="space-between">
        <Grid item>
          <User />
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" color="primary.light">
            {formatDate(date)}
          </Typography>
        </Grid>
      </Grid>

      <Component
        components={{
          h3: (props) => (
            <Typography variant="h4" component="h3" fontWeight="bold">
              {props.children}
            </Typography>
          ),
          h4: (props) => (
            <Typography variant="h5" component="h4" fontWeight="bold">
              {props.children}
            </Typography>
          ),
          a: (props) => (
            <Link href={props!.href} underline="hover">
              {props.children}
            </Link>
          ),
        }}
      />

      <DiscussionEmbed
        shortname="borales-blog"
        config={{
          url: `https://borales.dev/blog/${slug}`,
          identifier: slug,
          title,
        }}
      />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<
  PostType,
  Pick<PostType, 'slug'>
> = async ({ params }) => {
  const { data } = await apolloClient.query<{ post: PostType }>({
    query: gql`
      query Post($slug: String!) {
        post(where: { slug: $slug }) {
          title
          date
          slug
          content
        }
      }
    `,
    variables: {
      slug: params!.slug,
    },
  })

  if (!data?.post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      title: data.post.title,
      slug: data.post.slug,
      date: data.post.date,
      content: await parseContent(data.post.content),
    },
  }
}

export const getStaticPaths: GetStaticPaths<Pick<PostType, 'slug'>> =
  async () => {
    const paths = await apolloClient.query<{ posts: Pick<PostType, 'slug'>[] }>(
      {
        query: gql`
          query AllPosts {
            posts {
              slug
            }
          }
        `,
      }
    )

    return {
      paths: paths.data.posts.map(({ slug }) => ({ params: { slug } })),
      fallback: false,
    }
  }

export default Post
