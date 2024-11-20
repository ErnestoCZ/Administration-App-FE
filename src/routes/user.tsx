import { createFileRoute } from '@tanstack/react-router';
import { FC } from 'react';
import { UserInputForm } from '../components/UserInputForm';
import { UserList } from '../components/UserList';
import { UserListItem } from '../components/UserListItem';
import { Box } from '@chakra-ui/react';
import { getUsers } from '../services/usersAPI';
import { useQuery } from '@tanstack/react-query';
import { LoaderComponent } from '../components/LoaderComponent';

export const Route = createFileRoute('/user')({
  component: () => <UserPage />,
});

const UserPage: FC = () => {

  const queryAllUser = useQuery({queryKey: ['users'], queryFn: getUsers});
    const users = queryAllUser.data;
    //TODO make sure users is not undefined
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
            {queryAllUser.isLoading ? <LoaderComponent/> :users.map((user) => (
              <UserListItem key={user.id} user={user} />
            ))}
          </UserList>
        </Box>
      </>
    );

};
