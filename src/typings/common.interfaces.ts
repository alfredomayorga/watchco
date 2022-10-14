/* eslint-disable */

import {
  CategorySectionType,
  FeaturedItemType,
  HeroContent,
} from './common.types'

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
  featuredItems: FeaturedItemType[]
}

export interface CategorySectionProps {
  categorySection: CategorySectionType[]
}

export interface HomeProps {
  heroContent: HeroContent
  featuredItems: FeaturedItemType[]
  categorySection: CategorySectionType
}
