import Topbar from './Topbar'
import Footer from './Footer'
// eslint-disable-next-line
import type { LayoutProps } from '../../typings/common.interfaces'
function Layout({ children }: LayoutProps) {
  return (
    <>
      <Topbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
