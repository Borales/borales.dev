import { Avatar, Badge, Grid, Link, Stack } from '@mui/material'

export default function User() {
  return (
    <Badge sx={{ my: '16px' }}>
      <Grid container spacing={1}>
        <Grid item>
          <Avatar
            src="https://avatars2.githubusercontent.com/u/1118933?v=4"
            alt="Alex Bordun"
            title="Alex Bordun"
          />
        </Grid>
        <Grid item>
          <Stack>
            Alex Bordun
            <Link
              href="https://github.com/borales"
              target="_blank"
              fontSize="small"
              underline="hover"
            >
              @borales
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Badge>
  )
}
