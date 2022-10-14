import ItemOverlay from '@/components/shared/ItemOverlay'
import { Box } from '@chakra-ui/react'
import Image from 'next/future/image'
import { useState } from 'react'
import { FeaturedItemType } from 'src/typings/common.types'

function CategoryLink({
  imageUrl,
}: FeaturedItemType) {
  const [showOverlay, setShowOverlay] =
    useState<boolean>(false)

  function toggleOverlay() {
    setShowOverlay(!showOverlay)
  }
  return (
    <Box
      position="relative"
      flex="1"
      h={400}
      overflow="hidden"
      borderRadius={'10px'}
      onMouseEnter={toggleOverlay}
      onMouseLeave={toggleOverlay}
    >
      {showOverlay && (
        <ItemOverlay type="category" />
      )}
      <Image
        src={imageUrl}
        alt="Category"
        sizes="100vw"
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
      />
    </Box>
  )
}

export default CategoryLink
