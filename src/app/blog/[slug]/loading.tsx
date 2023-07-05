'use client'

import Link from '@@app/components/Link'
import Layout from '@@components/Layout'
import User from '@@components/User'
import { Breadcrumbs, CircularProgress, Grid, Typography } from '@mui/material'

export default function BlogPostLoading() {
  return (
    <Layout>
      <Breadcrumbs>
        <Link href="/" underline="hover">
          Home
        </Link>
        <Link href="/blog" underline="hover">
          Blog
        </Link>
        <Typography>Loading ...</Typography>
      </Breadcrumbs>
      <Typography variant="h3" fontWeight="bold" component="h1">
        Loading ...
      </Typography>

      <Grid container alignContent="center" justifyContent="space-between">
        <Grid item>
          <User />
        </Grid>
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>

      <CircularProgress />
    </Layout>
  )
}
