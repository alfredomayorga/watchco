import Image from 'next/future/image'
// eslint-disable-next-line
import type { HeroImageProps } from '../../../typings/common.interfaces'

function HeroImage({
  name,
  imageUrl,
}: HeroImageProps) {
  return (
    <>
      <Image
        data-cy="hero-image"
        src={imageUrl}
        alt={name}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '10px',
        }}
      />
    </>
  )
}

export default HeroImage
