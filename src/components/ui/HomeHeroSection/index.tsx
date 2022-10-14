import { Box, Flex } from '@chakra-ui/react'
import {
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
} from '@chakra-ui/react'
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
        <Fade
          in={true}
          style={{ transitionDuration: '500ms' }}
        >
          <HeroImage
            name={heroHeading}
            imageUrl={heroImage}
          />
        </Fade>
      </Box>
      <Box
        flex="0.5"
        my="auto"
      >
        <SlideFade
          in={true}
          offsetY="20px"
          style={{
            transitionDuration: '1000ms',
          }}
        >
          <HeroText
            heading={heroHeading}
            content={heroText}
          />
        </SlideFade>
      </Box>
    </Flex>
  )
}

export default HomeHeroSection
