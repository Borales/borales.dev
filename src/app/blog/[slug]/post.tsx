'use client'

import Link from '@@app/components/Link'
import Layout from '@@components/Layout'
import User from '@@components/User'
import { Breadcrumbs, GlobalStyles, Grid, Typography } from '@mui/material'
import { DiscussionEmbed } from 'disqus-react'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'

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

const components: MDXRemoteProps['components'] = {
  h3: (props: any) => (
    <Typography {...props} variant="h4" component="h3" fontWeight="bold" />
  ),
  h4: (props) => (
    <Typography {...props} variant="h5" component="h4" fontWeight="bold" />
  ),
  a: (props) => (
    <Link href={props!.href} underline="hover">
      {props.children}
    </Link>
  ),
}

export default function BlogPostContent({
  slug,
  content,
  title,
  date,
}: {
  slug: string
  content: any
  title: string
  date: string
}) {
  return (
    <Layout>
      {postGlobalStyles}
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
            {date}
          </Typography>
        </Grid>
      </Grid>

      <MDXRemote {...content} components={components} />

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
