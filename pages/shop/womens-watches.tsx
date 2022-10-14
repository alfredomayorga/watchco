import WatchBoxList from '@/components/shared/WatchBoxList'
import { NextPage } from 'next'
import womensWatches from '../../db/womens-watches.json'
/* eslint-disable-next-line max-len */
import type { CategoryProps } from '../../src/typings/common.interfaces'
const WomensPage: NextPage<CategoryProps> = (
  props
) => {
  return (
    <WatchBoxList watchBoxes={props.watchBoxes} />
  )
}

export default WomensPage

export async function getStaticProps() {
  return {
    props: womensWatches,
  }
}
