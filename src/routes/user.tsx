import { createFileRoute } from '@tanstack/react-router';
import { FC } from 'react';
import { User } from '../models/types';
import { UserInputForm } from '../components/UserInputForm';
import { UserList } from '../components/UserList';
import { UserListItem } from '../components/UserListItem';
import { Box } from '@chakra-ui/react';
import { getUsers } from '../services/usersAPI';

export const Route = createFileRoute('/user')({
  component: () => <UserPage />,
  loader: async (): Promise<User[]> => {
    const fetchedUsers: User[] = await getUsers();
    return fetchedUsers;
  },
});

const UserPage: FC = () => {
  const users = Route.useLoaderData<User[]>();
  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'flex-start'}
        flex={'1 1 auto'}
        backgroundColor={'grey.100'}
      >
        <UserInputForm />
        <UserList>
          {users.map((user) => (
            <UserListItem key={user.id} user={user} />
          ))}
        </UserList>
      </Box>
    </>
  );
};
