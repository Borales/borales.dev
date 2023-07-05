'use client'

import Layout from '@@components/Layout'
import Link from '@@components/Link'
import { Breadcrumbs, CircularProgress, Typography } from '@mui/material'

export default function BlogLoading() {
  return (
    <Layout>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/" underline="hover">
          Home
        </Link>
        <Typography>Blog</Typography>
      </Breadcrumbs>

      <Typography variant="h2" fontWeight="bold" component="h1">
        Blog
      </Typography>

      <CircularProgress />
    </Layout>
  )
}
