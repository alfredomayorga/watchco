// eslint-disable-next-line
import type { LayoutProps } from '../../typings/common.interfaces'

function Content({ children }: LayoutProps) {
  return (
    <main data-cy="content-container">
      {children}
    </main>
  )
}

export default Content
