'use client'

import User from '@@components/User'
import { Spinner } from '@heroui/spinner'
import { Breadcrumbs } from './breadcrumbs'

export default function BlogPostLoading() {
  return (
    <>
      <Breadcrumbs />
      <h1>Loading...</h1>

      <div className="flex place-content-between">
        <User />
        <Spinner />
      </div>

      <Spinner />
    </>
  )
}
