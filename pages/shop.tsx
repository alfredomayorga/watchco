import heroData from '../db/hero-content.json'

// eslint-disable-next-line max-len
import CategorySection from '@/components/ui/CategorySection'
import React from 'react'
import { NextPage } from 'next'
import { HomeProps } from 'src/typings/common.interfaces'
import { Box, SlideFade } from '@chakra-ui/react'
import FeatureSection from '@/components/ui/FeaturedSection'

const ShopPage: NextPage<HomeProps> = (props) => {
  const { categorySection, featuredItems } = props
  return (
    <Box mt={8}>
      <SlideFade in={true}>
        <CategorySection
          categorySection={categorySection}
        />
      </SlideFade>
      <FeatureSection
        featuredItems={featuredItems}
      />
    </Box>
  )
}

export default ShopPage

export async function getStaticProps() {
  return {
    props: heroData,
  }
}
