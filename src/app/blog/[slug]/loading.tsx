'use client'

import User from '@@components/User'
import { Breadcrumbs } from './breadcrumbs'
import { Spinner } from '@nextui-org/spinner'

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
