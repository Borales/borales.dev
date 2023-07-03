'use client'

import { LinkProps, Link as MuiLink } from '@mui/material'
import NextLink from 'next/link'

export default function Link({ href, ...rest }: LinkProps) {
  return (
    <NextLink href={href!} passHref legacyBehavior prefetch={false}>
      <MuiLink {...rest}>{rest.children}</MuiLink>
    </NextLink>
  )
}
