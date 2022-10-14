import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react'
import Link from 'next/link'
// eslint-disable-next-line
import { CategorySectionProps } from 'src/typings/common.interfaces'
import CategoryLink from './CategoryLink'
function CategorySection({
  categorySection,
}: CategorySectionProps) {
  return (
    <Flex
      gap={'48px'}
      mb={8}
      data-cy="category-section"
    >
      <Box
        flex="1"
        data-cy="mens-section"
      >
        <Link href="/shop/mens-watches">
          <a>
            <Heading mb={4}>Men&apos;s</Heading>
            <CategoryLink
              name={categorySection[0].name}
              imageUrl={
                categorySection[0].imageUrl
              }
            />
          </a>
        </Link>
      </Box>
      <Box
        flex="1"
        data-cy="womens-section"
      >
        <Link href="/shop/womens-watches">
          <a>
            <Heading mb={4}>Women&apos;s</Heading>
            <CategoryLink
              name={categorySection[1].name}
              imageUrl={
                categorySection[1].imageUrl
              }
            />
          </a>
        </Link>
      </Box>
    </Flex>
  )
}

export default CategorySection
