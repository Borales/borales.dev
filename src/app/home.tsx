'use client'

import { Alert } from '@@app/components/elements/Alert'
import { PostType } from '@@app/types'
import RecentItems from '@@components/Blog/RecentItems'
import NameTag from '@@components/NameTag'
import User from '@@components/User'
import { ExclamationTriangleIcon as WarningIcon } from '@heroicons/react/24/outline'

export default function HomeContent({ posts }: { posts: PostType[] }) {
  return (
    <>
      <header className="flex content-center justify-between">
        <NameTag />
        <User />
      </header>

      <RecentItems recentPosts={posts} />

      <Alert>
        <WarningIcon className="mr-2 inline aspect-square w-6 text-warning-500" />
        Apologies, the page is in progress!
      </Alert>
    </>
  )
}
