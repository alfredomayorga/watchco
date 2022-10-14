import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
// eslint-disable-next-line max-len
import type { WatchBoxListProps } from '../../../typings/common.interfaces'
import WatchBox from '../WatchBox'
function WatchBoxList({
  watchBoxes,
}: WatchBoxListProps) {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={6}
      my={8}
    >
      {watchBoxes.map((watchBox) => {
        return (
          <GridItem
            key={watchBox.id}
            w="100%"
            h="300"
          >
            <WatchBox
              id={watchBox.id}
              name={watchBox.name}
              price={watchBox.price}
              imageUrl={watchBox.imageUrl}
            />
          </GridItem>
        )
      })}
    </Grid>
  )
}

export default WatchBoxList
