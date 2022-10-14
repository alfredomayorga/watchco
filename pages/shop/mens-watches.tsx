import WatchBoxList from '@/components/shared/WatchBoxList'
import { NextPage } from 'next'
import mensWatches from '../../db/mens-watches.json'
/* eslint-disable-next-line max-len */
import type { CategoryProps } from '../../src/typings/common.interfaces'
const MensPage: NextPage<CategoryProps> = (
  props
) => {
  return (
    <WatchBoxList watchBoxes={props.watchBoxes} />
  )
}

export default MensPage

export async function getStaticProps() {
  return {
    props: mensWatches,
  }
}
