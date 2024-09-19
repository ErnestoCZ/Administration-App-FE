import { createFileRoute } from '@tanstack/react-router'
import { FC } from 'react'
import { fakeUsers, User } from '../fakeData'

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
  const users = Route.useLoaderData();
  console.log(users)
  if (!users) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
