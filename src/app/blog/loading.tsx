'use client'

import { Spinner } from '@nextui-org/spinner'
import { Breadcrumbs } from './breadcrumbs'

export default function BlogLoading() {
  return (
    <>
      <Breadcrumbs />
      <h1>Blog</h1>
      <Spinner size="lg" color="secondary" />
    </>
  )
}
