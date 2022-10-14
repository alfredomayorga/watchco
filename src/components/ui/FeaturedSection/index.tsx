import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react'
import React from 'react'
// eslint-disable-next-line
import type { FeaturedSectionProps } from '../../../typings/common.interfaces'
import FeaturedItem from './FeaturedItem'
function FeatureSection({
  featuredItems,
}: FeaturedSectionProps) {
  return (
    <Box>
      <Heading mb={8}>Featured</Heading>
      <Flex
        gap={'24px'}
        mb={'48px'}
        data-cy="featured-section"
      >
        {featuredItems.map((item, i) => (
          <FeaturedItem
            key={i}
            name={item.name}
            imageUrl={item.imageUrl}
          />
        ))}
      </Flex>
    </Box>
  )
}

export default FeatureSection
