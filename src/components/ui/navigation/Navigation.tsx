import {
  HStack,
  Box,
  Text,
  Button,
  Badge,
} from '@chakra-ui/react'
import Link from 'next/link'
import { ShoppingCartSimple } from 'phosphor-react'

function Navigation() {
  return (
    <HStack
      spacing="40px"
      mr="40px"
      data-cy="navigation"
    >
      <Box>
        <Link href="/">
          <Text
            data-cy="home-link"
            href="/"
            as="a"
            variant="link"
            textTransform={'uppercase'}
            cursor="pointer"
          >
            Home
          </Text>
        </Link>
      </Box>
      <Box>
        <Link href="/">
          <Text
            href="/shop"
            as="a"
            colorScheme={'black'}
            variant="link"
            textTransform={'uppercase'}
            cursor="pointer"
            data-cy="shop-link"
          >
            Shop
          </Text>
        </Link>
      </Box>
      <Box data-cy="view-cart">
        <Button
          colorScheme="black"
          variant="link"
        >
          <ShoppingCartSimple size={28} />
          <Badge
            variant="outline"
            colorScheme="green"
          >
            0
          </Badge>
        </Button>
      </Box>
    </HStack>
  )
}

export default Navigation
