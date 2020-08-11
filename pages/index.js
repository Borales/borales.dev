import Head from 'next/head'
import Layout from '../components/Layout'
import RecentItems from '../components/Blog/RecentItems'
import { sortPosts } from '../service/blogManager'
import { Text, Card, Spacer, Note, Grid, User } from '@zeit-ui/react'

import { frontMatter as blogPosts } from './blog/**.mdx'

export default function Home() {
  const recentPosts = sortPosts(blogPosts).slice(0, 3)
  return (
    <Layout>
      <Head>
        <title>borales.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid.Container alignItems="center" justify="space-between">
        <Grid>
          <Text h1>Borales</Text>
        </Grid>
        <Grid>
          <User
            src="https://avatars2.githubusercontent.com/u/1118933?v=4"
            name="Alex Bordun"
          >
            <User.Link href="https://github.com/borales">@borales</User.Link>
          </User>
        </Grid>
      </Grid.Container>

      <RecentItems recentPosts={recentPosts} />
      <Spacer y={1} />
      <Card shadow>
        <Note type="error">Apologies, the page is in progress!</Note>
      </Card>
    </Layout>
  )
}
