import { createFileRoute } from '@tanstack/react-router';
import { FC } from 'react';
import { User } from '../models/types';
import { UserInputForm } from '../components/UserInputForm';
import { UserList } from '../components/UserList';
import { UserListItem } from '../components/UserListItem';
import { Box } from '@chakra-ui/react';
import { getUsers } from '../services/usersAPI';
import { useQuery } from '@tanstack/react-query';

export const Route = createFileRoute('/user')({
  component: () => <UserPage />,
});

const UserPage: FC = () => {

  const queryAllUser = useQuery({queryKey: ['users'], queryFn: getUsers});
    const status = queryAllUser.status;
    const users = queryAllUser.data;
    if(!users) {
      return <div>No users found</div>
    }


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
          {queryAllUser.isLoading && <div>Loading...</div>}
          <UserList>
            {users.map((user) => (
              <UserListItem key={user.id} user={user} />
            ))}
          </UserList>
        </Box>
      </>
    );

};
