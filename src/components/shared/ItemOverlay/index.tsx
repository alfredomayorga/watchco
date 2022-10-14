import {
  Button,
  Flex,
  Center,
  Fade,
} from '@chakra-ui/react'

function ItemOverlay() {
  return (
    <Flex
      h="full"
      w="full"
      position={'absolute'}
      backgroundColor={'rgba(0,0,0,.5)'}
      borderRadius={'10px'}
    >
      <Center w="full">
        <Fade in={true}>
          <Button colorScheme="gray">
            Shop Now
          </Button>
        </Fade>
      </Center>
    </Flex>
  )
}

export default ItemOverlay
