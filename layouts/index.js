import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/Layout'
import DateFormat from '../components/DateFormat'
import User from '../components/User'
import { Breadcrumbs, Spacer, Text, Grid, Note } from '@zeit-ui/react'

export default function BlogLayout(frontMatter) {
  return ({ children }) => {
    return (
      <Layout>
        <Head>
          <title>{frontMatter.title} | borales.dev</title>
          <meta
            property="article:published_time"
            content={new Date(frontMatter.publishedAt).toISOString()}
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
          <Breadcrumbs.Item>{frontMatter.title}</Breadcrumbs.Item>
        </Breadcrumbs>

        <h1>{frontMatter.title}</h1>
        <Grid.Container alignItems="center" justify="space-between">
          <Grid>
            <User />
          </Grid>
          <Grid>
            <Text
              small
              title={frontMatter.publishedAt}
              style={{ color: 'grey' }}
            >
              <DateFormat date={frontMatter.publishedAt} />
            </Text>
          </Grid>
        </Grid.Container>
        <Spacer y={1} />

        {frontMatter.summary && (
          <Note label={false}>{frontMatter.summary}</Note>
        )}
        {children}
      </Layout>
    )
  }
}
