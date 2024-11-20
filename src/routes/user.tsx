import { createFileRoute } from '@tanstack/react-router';
import { FC } from 'react';
import { UserInputForm } from '../components/User/UserInputForm';
import { UserList } from '../components/User/UserList';
import { UserListItem } from '../components/User/UserListItem';
import { Box, Center } from '@chakra-ui/react';
import { LoaderComponent } from '../components/LoaderComponent';
import { useAllUsersData } from '../hooks/useAllUsersData';

export const Route = createFileRoute('/user')({
  component: () => <UserPage />,
});

const UserPage: FC = () => {
  const queryAllUser = useAllUsersData();
  const users = queryAllUser.data;
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
          {queryAllUser.isLoading ? (
            <LoaderComponent />
          ) : users ? (
            users.map((user) => <UserListItem key={user.id} user={user} />)
          ) : (
            <Center>No Users Found</Center>
          )}
        </UserList>
      </Box>
    </>
  );
};
