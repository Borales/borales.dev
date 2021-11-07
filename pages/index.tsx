import { gql } from '@apollo/client'
import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import apolloClient from '../src/apolloClient'
import RecentItems from '../src/components/Blog/RecentItems'
import Layout from '../src/components/Layout'
import User from '../src/components/User'
import { PostType } from '../src/types'

const Home = ({ recentPosts }: { recentPosts: PostType[] }) => {
  return (
    <Layout>
      <Stack spacing={3}>
        <Grid container justifyContent="space-between" alignContent="center">
          <Grid item>
            <Typography variant="h2" component="h1" fontWeight="bold">
              &lt;
              <Typography
                component="span"
                variant="h2"
                fontWeight="bold"
                color="primary.main"
              >
                Borales
              </Typography>{' '}
              /&gt;
            </Typography>
          </Grid>
          <Grid item>
            <User />
          </Grid>
        </Grid>

        <RecentItems recentPosts={recentPosts} />

        <Paper variant="outlined">
          <Alert severity="warning">Apologies, the page is in progress!</Alert>
        </Paper>
      </Stack>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const recentPosts = await apolloClient.query<{ posts: PostType[] }>({
    query: gql`
      query RecentPosts($limit: Int) {
        posts(first: $limit, orderBy: date_DESC) {
          slug
          title
          date
        }
      }
    `,
    variables: { limit: 3 },
  })

  return {
    props: { recentPosts: recentPosts.data.posts },
  }
}

export default Home
