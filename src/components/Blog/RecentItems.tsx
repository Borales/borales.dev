import { PostType } from '@@app/types'
import ButtonLink from '@@components/ButtonLink'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
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
        <ButtonLink href="/blog">All blog posts &rarr;</ButtonLink>
      </CardActions>
    </Card>
  )
}
