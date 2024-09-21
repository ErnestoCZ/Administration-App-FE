import { createFileRoute } from '@tanstack/react-router'
import { FC } from 'react'
import { fakeUsers, User } from '../fakeData'
import { Box } from '@chakra-ui/react'
import styled from 'styled-components'
import { UserInputForm } from '../components/UserInputForm'
import { UserList } from '../components/UserList'
import { UserListItem } from '../components/UserListItem'

export const Route = createFileRoute('/user')({
  component: () => <UserPage/>,
  loader: (): User[] => {
    setTimeout(() => {(
      console.log('fakeUsers:', fakeUsers)
    )}, 1000)
    return fakeUsers
  },
})


const UserPageWrapper = styled(Box)`
display: flex;
flex-direction: column;
justify-content: space-between;
height: auto;
`

const ContentBox = styled(Box)`
flex-direction: column;
background-color: aliceblue;
padding: 10vh;
border-radius: 1vh;
margin: 0px;
padding: 0%;
width: 100%;
`
const UserPage: FC = () => {
  const users = Route.useLoaderData<User[]>();
  return (
    <>
    <UserPageWrapper>

      <ContentBox>
        <UserInputForm/>

          <UserList>

            {users.map( (user) => (<UserListItem key={user.id} user={user}/>))}

          </UserList>

      </ContentBox>
      
    </UserPageWrapper>
    </>
  )
}
