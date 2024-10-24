import { FC } from 'react'
import { User } from '../fakeData'
import { Box, Button, Flex } from '@chakra-ui/react'
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

        <Flex flexDirection={'row'} justifyContent={'space-between'}>
            <Flex alignItems={'center'} flex={'20 1 auto'}>
                {user.firstName}  {user.lastName} 
            </Flex>
            <Flex flex={'1 1 auto'} justifyContent={'space-evenly'}>
                <Button  variant={'edit'}>Edit</Button>
                <Button  variant={'delete'}>Delete</Button>
            </Flex>

        </Flex>
    </StyledUserListItem>
  )
}
