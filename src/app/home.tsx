'use client'

import RecentItems from '@@app/components/Blog/RecentItems'
import { PostType } from '@@app/types'
import Layout from '@@components/Layout'
import User from '@@components/User'
import { Alert, Grid, Paper, Stack, Typography } from '@mui/material'

export default function HomeContent({ posts }: { posts: PostType[] }) {
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

        <RecentItems recentPosts={posts} />

        <Paper variant="outlined">
          <Alert severity="warning">Apologies, the page is in progress!</Alert>
        </Paper>
      </Stack>
    </Layout>
  )
}
