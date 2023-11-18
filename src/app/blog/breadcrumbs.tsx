'use client'

import { Breadcrumbs as NextBreadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs'

export const Breadcrumbs = () => {
  return (
    <NextBreadcrumbs aria-label="Breadcrumbs">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem>Blog</BreadcrumbItem>
    </NextBreadcrumbs>
  )
}
