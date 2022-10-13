import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react'
// eslint-disable-next-line
import type { HeroTextProps } from '../../../typings/common.interfaces'

function HeroText({
  heading,
  content,
}: HeroTextProps) {
  return (
    <Box data-cy="hero-text">
      <Heading mb={6}>{heading}</Heading>
      <Text>{content}</Text>
    </Box>
  )
}

export default HeroText
