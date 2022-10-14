import heroData from '../db/hero-content.json'

import type { NextPage } from 'next'
import Content from '../src/components/layout/Content'
// eslint-disable-next-line
import HomeHeroSection from '@/components/ui/HomeHeroSection'
import FeatureSection from '@/components/ui/FeaturedSection'
// eslint-disable-next-line
import CategorySection from '@/components/ui/CategorySection'
import { HomeProps } from 'src/typings/common.interfaces'
const Home: NextPage<HomeProps> = (props) => {
  const {
    heroContent,
    featuredItems,
    categorySection,
  } = props
  return (
    <Content>
      <>
        <HomeHeroSection
          heroContent={heroContent}
        />
        <FeatureSection
          featuredItems={featuredItems}
        />
        <CategorySection
          categorySection={categorySection}
        />
      </>
    </Content>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: heroData,
  }
}
