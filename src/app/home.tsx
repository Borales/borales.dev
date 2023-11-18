'use client'

import { PostType } from '@@app/types'
import { ExclamationTriangleIcon as WarningIcon } from '@heroicons/react/24/outline'
import User from '@@components/User'
import NameTag from '@@components/NameTag'
import RecentItems from '@@components/Blog/RecentItems'
import { Alert } from '@@app/components/elements/Alert'

export default function HomeContent({ posts }: { posts: PostType[] }) {
  return (
    <>
      <header className="flex justify-between content-center">
        <NameTag />
        <User />
      </header>

      <RecentItems recentPosts={posts} />

      <Alert>
        <WarningIcon className="inline aspect-square w-6 text-warning-500 mr-2" />
        Apologies, the page is in progress!
      </Alert>
    </>
  )
}
