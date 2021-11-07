import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'
import { PostType } from '../../types'
import BlogListing from './Listing'

export default function RecentItems({
  recentPosts = [],
}: {
  recentPosts: PostType[]
}) {
  if (!recentPosts.length) {
    return null
  }

  return (
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
        <BlogListing posts={recentPosts} />
      </CardContent>
      <CardActions>
        <NextLink href="/blog" passHref>
          <Button>All blog posts &rarr;</Button>
        </NextLink>
      </CardActions>
    </Card>
  )
}
