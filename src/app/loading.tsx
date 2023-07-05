'use client'

import Layout from '@@components/Layout'
import User from '@@components/User'
import { Alert, Grid, Paper, Skeleton, Stack, Typography } from '@mui/material'

export default function HomeLoading() {
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

        <Skeleton variant="rectangular" height={300} />

        <Paper variant="outlined">
          <Alert severity="warning">Apologies, the page is in progress!</Alert>
        </Paper>
      </Stack>
    </Layout>
  )
}
