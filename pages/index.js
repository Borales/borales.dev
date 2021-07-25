import Head from 'next/head'
import Layout from '../components/Layout'
import RecentItems from '../components/Blog/RecentItems'
import User from '../components/User'
import { getRecentPosts } from '../service/blogManager'
import { Text, Card, Spacer, Note, Grid } from '@geist-ui/react'

const Home = ({ recentPosts }) => {
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
          <User />
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

export const getStaticProps = async () => {
  const recentPosts = getRecentPosts(3)

  return {
    props: { recentPosts },
  }
}

export default Home
