/* eslint-disable */

export type HeroContent = {
  heroImage: string
  heroHeading: string
  heroText: string
}

export type HomepageContent = {
  heroContent: HeroContent
}

export type FeaturedItemType = {
  name: string
  imageUrl: string
}

export type CategorySectionType = {
  name: string
  imageUrl: string
}

export type WatchBoxType = {
  id: number
  name: string
  price: number
  imageUrl: string
}
