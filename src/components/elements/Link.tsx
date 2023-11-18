import NextLink from 'next/link'
import { Link as NextUiLink, LinkProps as NextUiLinkProps } from '@nextui-org/link'

type LinkProps = Omit<NextUiLinkProps, 'as'> & {
  children: React.ReactNode
}

export const Link = (props: LinkProps) => {
  const { children, ...rest } = props

  return (
    <NextUiLink as={NextLink} {...rest}>
      {children}
    </NextUiLink>
  )
}
