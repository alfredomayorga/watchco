import {
  Flex,
  Center,
  Spacer,
} from '@chakra-ui/react'
import CompanyLogo from '../shared/CompanyLogo/CompanyLogo'
import UserAvatar from '../shared/UserAvatar/UserAvatar'
function Topbar() {
  return (
    <Flex
      data-cy="content-top-bar"
      direction={'row'}
      h={65}
    >
      <Center>
        <CompanyLogo />
      </Center>
      <Spacer />
      <Center>
        <UserAvatar />
      </Center>
    </Flex>
  )
}

export default Topbar
