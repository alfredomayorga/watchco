import heroData from '../db/hero-content.json'

import type { NextPage } from 'next'
import Content from '../src/components/layout/Content'
// eslint-disable-next-line
import HomeHeroSection from '@/components/ui/HomeHeroSection'
import { HeroContent } from 'src/typings/common.types'

interface HomeProps {
  heroContent: HeroContent
}

const Home: NextPage<HomeProps> = (props) => {
  const { heroContent } = props
  return (
    <Content>
      <HomeHeroSection
        heroContent={heroContent}
      />
    </Content>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: heroData,
  }
}
