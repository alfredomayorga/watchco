import heroData from '../db/hero-content.json'

import type { NextPage } from 'next'
import Content from '../src/components/layout/Content'
// eslint-disable-next-line
import HomeHeroSection from '@/components/ui/HomeHeroSection'
import {
  FeaturedItem,
  HeroContent,
} from 'src/typings/common.types'
import FeatureSection from '@/components/ui/FeaturedSection'

interface HomeProps {
  heroContent: HeroContent
  featuredItems: FeaturedItem[]
}

const Home: NextPage<HomeProps> = (props) => {
  const { heroContent, featuredItems } = props
  return (
    <Content>
      <>
        <HomeHeroSection
          heroContent={heroContent}
        />
        <FeatureSection
          featuredItems={featuredItems}
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
