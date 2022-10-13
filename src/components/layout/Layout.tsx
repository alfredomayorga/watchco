import Topbar from './Topbar'
import Footer from './Footer'
// eslint-disable-next-line
import type { LayoutProps } from '../../typings/common.interfaces'
import {
  Container,
  Divider,
} from '@chakra-ui/react'

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Container maxW="container.xl">
        <Topbar />
      </Container>

      <Divider />
      <Container maxW="container.xl">
        {children}
      </Container>
      <Container maxW="container.xl">
        <Footer />
      </Container>
    </>
  )
}

export default Layout
