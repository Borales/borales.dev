import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Link from './Link'

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
