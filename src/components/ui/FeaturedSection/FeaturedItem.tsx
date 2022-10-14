import ItemOverlay from '@/components/shared/ItemOverlay'
import {
  Center,
  Flex,
  Heading,
} from '@chakra-ui/react'
import Image from 'next/future/image'
import { useState } from 'react'
import { FeaturedItemType } from 'src/typings/common.types'

function FeaturedItem({
  name,
  imageUrl,
}: FeaturedItemType) {
  const [showOverlay, setShowOverlay] =
    useState<boolean>(false)

  function toggleOverlay() {
    setShowOverlay(!showOverlay)
  }
  return (
    <Flex
      flex="1"
      h={'100%'}
      direction="column"
      overflow={'hidden'}
      onMouseEnter={toggleOverlay}
      onMouseLeave={toggleOverlay}
    >
      <Flex
        h={250}
        overflow={'hidden'}
        borderRadius={10}
      >
        <Center pos={'relative'}>
          {showOverlay && (
            <ItemOverlay type="category" />
          )}

          <Image
            src={imageUrl}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt={name}
          />
        </Center>
      </Flex>
      <Heading
        as="h6"
        size={'md'}
        mt={4}
      >
        {name}
      </Heading>
    </Flex>
  )
}

export default FeaturedItem
