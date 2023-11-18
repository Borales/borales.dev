import { PostType } from '@@app/types'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import BlogListing from './Listing'
import { Link } from '../elements/Link'

export default function RecentItems({ recentPosts = [] }: { recentPosts: PostType[] }) {
  if (!recentPosts.length) {
    return null
  }

  return (
    <Card shadow="sm" radius="sm">
      <CardHeader>
        <h2>My recent blog posts</h2>
      </CardHeader>
      <CardBody>
        <BlogListing posts={recentPosts} />
      </CardBody>
      <CardFooter>
        <Link isBlock className="after:rounded-md" color="secondary" href="/blog">
          All blog posts &rarr;
        </Link>
      </CardFooter>
    </Card>
  )
}
