'use client'

import { ButtonProps, Button as MuiButton } from '@mui/material'
import NextLink from 'next/link'

export default function ButtonLink({ href, ...rest }: ButtonProps) {
  return (
    <NextLink href={href!} passHref legacyBehavior prefetch={false}>
      <MuiButton {...rest}>{rest.children}</MuiButton>
    </NextLink>
  )
}
