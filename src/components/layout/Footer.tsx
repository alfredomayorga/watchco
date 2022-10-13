import {
  Center,
  Container,
  Flex,
  Heading,
} from '@chakra-ui/react'

function Footer() {
  return (
    <Container maxW="container.xl">
      <Flex
        data-cy="content-footer"
        h={50}
      >
        <Center>
          <Heading
            as="h4"
            size={'sm'}
            color="white"
          >
            Copyright 2022
          </Heading>
        </Center>
      </Flex>
    </Container>
  )
}

export default Footer
