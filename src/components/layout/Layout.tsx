import Topbar from './Topbar'
import Footer from './Footer'
// eslint-disable-next-line
import type { LayoutProps } from '../../typings/common.interfaces'
import {
  Container,
  Divider,
  Box,
} from '@chakra-ui/react'

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Container maxW="container.xl">
        <Topbar />
      </Container>

      <Divider />
      <Container
        maxW="container.xl"
        minH={'container.sm'}
      >
        {children}
      </Container>
      <Box
        maxW="full"
        bg={'gray.900'}
      >
        <Footer />
      </Box>
    </>
  )
}

export default Layout
