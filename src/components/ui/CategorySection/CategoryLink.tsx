import { Box } from '@chakra-ui/react'
import Image from 'next/future/image'
import { FeaturedItemType } from 'src/typings/common.types'

function CategoryLink({
  imageUrl,
}: FeaturedItemType) {
  return (
    <Box
      flex="1"
      h={400}
      overflow="hidden"
      borderRadius={'10px'}
    >
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
