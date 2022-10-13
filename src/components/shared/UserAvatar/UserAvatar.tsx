import { Avatar } from '@chakra-ui/react'

function UserAvatar() {
  return (
    <Avatar
      data-cy="user-avatar"
      name="Dan Abrahmov"
      src="https://bit.ly/sage-adebayo"
      size="sm"
    />
  )
}

export default UserAvatar
