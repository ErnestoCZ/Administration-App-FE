import { FC } from 'react'
import { User } from '../fakeData'
import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import styled from 'styled-components'

const StyledUserListItem = styled(Box)`
background-color: #05d9f5;
border-radius: 10px;
margin: 4px;
padding: 8px;
`

interface UserListItemProps {
    user: User
}



export const UserListItem : FC<UserListItemProps> = ({user}) => {
  return (
    <StyledUserListItem>

        <Flex flexDirection={'row'}>
            <Box>
                {user.firstName}  {user.lastName}
            </Box>
            <Spacer/>
            <Box>
                <Button colorScheme='white'>Edit</Button>
                <Button colorScheme='red'>Delete</Button>
            </Box>

        </Flex>
    </StyledUserListItem>
  )
}
