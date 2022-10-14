import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { HomepageContent } from 'src/typings/common.types'
import HeroImage from '../HeroImage/HeroImage'
import HeroText from '../HeroText/HeroText'

function HomeHeroSection({
  heroContent,
}: HomepageContent) {
  const { heroImage, heroHeading, heroText } =
    heroContent
  return (
    <Flex
      gap={'24px'}
      my={'48px'}
    >
      <Box flex="1">
        <HeroImage
          name={heroHeading}
          imageUrl={heroImage}
        />
      </Box>
      <Box
        flex="0.5"
        my="auto"
      >
        <HeroText
          heading={heroHeading}
          content={heroText}
        />
      </Box>
    </Flex>
  )
}

export default HomeHeroSection
