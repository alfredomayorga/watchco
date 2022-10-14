import {
  Button,
  Flex,
  Center,
  Fade,
} from '@chakra-ui/react'

interface ItemOverlayProps {
  type: string
}

function ItemOverlay({ type }: ItemOverlayProps) {
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
            {type === 'category'
              ? 'Show Now'
              : 'Add To Cart'}
          </Button>
        </Fade>
      </Center>
    </Flex>
  )
}

export default ItemOverlay
