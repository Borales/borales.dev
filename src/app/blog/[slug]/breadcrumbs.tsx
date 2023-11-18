'use client'

import { Breadcrumbs as NextBreadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs'

type BreadcrumbsProps = {
  active?: string
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <NextBreadcrumbs aria-label="Breadcrumbs">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
      <BreadcrumbItem>{props?.active ?? 'Loading ...'}</BreadcrumbItem>
    </NextBreadcrumbs>
  )
}
