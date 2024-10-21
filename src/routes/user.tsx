import { createFileRoute } from '@tanstack/react-router'
import { FC } from 'react'
import { fakeUsers, User } from '../fakeData'
import { UserInputForm } from '../components/UserInputForm'
import { UserList } from '../components/UserList'
import { UserListItem } from '../components/UserListItem'
import {Box} from '@chakra-ui/react';

export const Route = createFileRoute('/user')({
  component: () => <UserPage/>,
  loader: (): User[] => {
    setTimeout(() => {(
      console.log('fakeUsers:', fakeUsers)
    )}, 1000)
    return fakeUsers
  },
})


const UserPage: FC = () => {
  const users = Route.useLoaderData<User[]>();
  return (
    <>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} flex={'1 1 auto'}  backgroundColor={'grey.100'}>
        <UserInputForm/>
          <UserList>
            {users.map( (user) => (<UserListItem key={user.id} user={user}/>))}
          </UserList>
      </Box>
      
    </>
  )
}
