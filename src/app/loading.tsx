'use client'

import { Skeleton } from '@nextui-org/skeleton'
import NameTag from '@@app/components/NameTag'
import { ExclamationTriangleIcon as WarningIcon } from '@heroicons/react/24/outline'
import { Alert } from '@@app/components/elements/Alert'
import User from '@@components/User'

export default function HomeLoading() {
  return (
    <>
      <header className="flex justify-between content-center">
        <NameTag />
        <User />
      </header>

      <Skeleton className="h-80 rounded-md" />

      <Alert>
        <WarningIcon className="inline aspect-square w-6 text-warning-500 mr-2" />
        Apologies, the page is in progress!
      </Alert>
    </>
  )
}
