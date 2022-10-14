import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react'
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
        <Heading mb={4}>Men&apos;s</Heading>
        <CategoryLink
          name={categorySection[0].name}
          imageUrl={categorySection[0].imageUrl}
        />
      </Box>
      <Box
        flex="1"
        data-cy="womens-section"
      >
        <Heading mb={4}>Women&apos;s</Heading>
        <CategoryLink
          name={categorySection[1].name}
          imageUrl={categorySection[1].imageUrl}
        />
      </Box>
    </Flex>
  )
}

export default CategorySection
