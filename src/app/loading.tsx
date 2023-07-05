'use client'

import Layout from '@@components/Layout'
import User from '@@components/User'
import {
  Alert,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

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

        <Card
          raised
          sx={{
            boxShadow: 5,
            ':hover': {
              boxShadow: 10,
            },
          }}
        >
          <CardContent>
            <Typography variant="h5" fontWeight="bold" component="h3">
              My recent blog posts
            </Typography>
            <CircularProgress />
          </CardContent>
        </Card>

        <Paper variant="outlined">
          <Alert severity="warning">Apologies, the page is in progress!</Alert>
        </Paper>
      </Stack>
    </Layout>
  )
}
