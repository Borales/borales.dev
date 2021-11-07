import Container from '@mui/material/Container'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<{}>) {
  return <Container sx={{ my: 6 }}>{children}</Container>
}
