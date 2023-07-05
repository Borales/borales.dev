import { formatDate } from '@@app/helpers/formatDate'
import { PostType } from '@@app/types'
import ArticleIcon from '@mui/icons-material/Article'
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'

export default function BlogListing({ posts = [] }: { posts: PostType[] }) {
  if (!posts.length) {
    return <Typography variant="h3">No posts</Typography>
  }

  return (
    <List>
      {posts.map(({ slug, title, date }) => (
        <ListItemButton
          href={`/blog/${slug}`}
          key={slug}
          style={{ padding: 0 }}
        >
          <ListItemAvatar>
            <Avatar variant="rounded" sx={{ bgcolor: 'primary.main' }}>
              <ArticleIcon fontSize="small" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={title} secondary={`on ${formatDate(date)}`} />
        </ListItemButton>
      ))}
    </List>
  )
}
