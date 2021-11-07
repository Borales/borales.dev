import { formatDate } from '@@app/helpers/formatDate'
import { PostType } from '@@app/types'
import ArticleIcon from '@mui/icons-material/Article'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function BlogListing({ posts = [] }: { posts: PostType[] }) {
  if (!posts.length) {
    return <Typography variant="h3">No posts</Typography>
  }

  return (
    <List>
      {posts.map(({ slug, title, date }) => (
        <Link href={`/blog/${slug}`} passHref prefetch={false} key={slug}>
          <ListItem button disablePadding component={'a'}>
            <ListItemAvatar>
              <Avatar variant="rounded" sx={{ bgcolor: 'primary.main' }}>
                <ArticleIcon fontSize="small" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={title}
              secondary={`on ${formatDate(date)}`}
            />
          </ListItem>
        </Link>
      ))}
    </List>
  )
}
