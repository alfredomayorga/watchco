import {
  Center,
  Flex,
  Heading,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Watch } from 'phosphor-react'

function CompanyLogo() {
  return (
    <Link href="/">
      <a>
        <Flex
          data-cy="company-logo"
          direction={'row'}
        >
          <Center>
            <Heading
              as={'h2'}
              size="lg"
            >
              Watch Co.
            </Heading>
            <Watch size={28} />
          </Center>
        </Flex>
      </a>
    </Link>
  )
}

export default CompanyLogo
