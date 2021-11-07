import MuiLink, { LinkProps } from '@mui/material/Link'
import NextLink from 'next/link'

export default function Link({ href, ...rest }: LinkProps) {
  return (
    <NextLink href={href!} passHref>
      <MuiLink {...rest}>{rest.children}</MuiLink>
    </NextLink>
  )
}
