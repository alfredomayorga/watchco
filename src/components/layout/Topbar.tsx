import {
  Flex,
  Center,
  Spacer,
} from '@chakra-ui/react'
import CompanyLogo from '../shared/CompanyLogo/CompanyLogo'
import UserAvatar from '../shared/UserAvatar/UserAvatar'
import Navigation from '../ui/navigation/Navigation'
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
        <Navigation />
        <UserAvatar />
      </Center>
    </Flex>
  )
}

export default Topbar
