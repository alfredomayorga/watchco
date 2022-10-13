/* eslint-disable */

import { FeaturedItem } from './common.types'

export interface LayoutProps {
  children: JSX.Element
}

export interface HeroImageProps {
  name: string
  imageUrl: string
}

export interface HeroTextProps {
  heading: string
  content: string
}

export interface FeaturedSectionProps {
  featuredItems: FeaturedItem[]
}
