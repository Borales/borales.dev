'use client'

import NameTag from '@@app/components/NameTag'
import { Alert } from '@@app/components/elements/Alert'
import User from '@@components/User'
import { ExclamationTriangleIcon as WarningIcon } from '@heroicons/react/24/outline'
import { Skeleton } from '@heroui/skeleton'

export default function HomeLoading() {
  return (
    <>
      <header className="flex content-center justify-between">
        <NameTag />
        <User />
      </header>

      <Skeleton className="h-80 rounded-md" />

      <Alert>
        <WarningIcon className="mr-2 inline aspect-square w-6 text-warning-500" />
        Apologies, the page is in progress!
      </Alert>
    </>
  )
}
