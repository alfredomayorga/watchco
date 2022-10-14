import {
  Flex,
  Center,
  Heading,
  Text,
} from '@chakra-ui/react'
import Image from 'next/future/image'
import { useState } from 'react'
// eslint-disable-next-line max-len
import type { WatchBoxType } from '../../../typings/common.types'
import ItemOverlay from '../ItemOverlay'
function WatchBox({
  id,
  name,
  price,
  imageUrl,
}: WatchBoxType) {
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
            <ItemOverlay type="watch" />
          )}

          <Image
            src={imageUrl}
            width={0}
            height={600}
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
        size={'sm'}
        mt={2}
      >
        {name}
      </Heading>
      <Text>${price}</Text>
    </Flex>
  )
}

export default WatchBox
