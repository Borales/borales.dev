'use client'

import { BreadcrumbItem, Breadcrumbs as NextBreadcrumbs } from '@nextui-org/breadcrumbs'

export const Breadcrumbs = () => {
  return (
    <NextBreadcrumbs aria-label="Breadcrumbs">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem>Blog</BreadcrumbItem>
    </NextBreadcrumbs>
  )
}
