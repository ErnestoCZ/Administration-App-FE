import { UserInputForm } from '@/components/User/UserInputForm';
import { List } from '@/components/User/UserListComponent';
import { UserListItem } from '@/components/User/UserListItem';
import { useAllUsersData } from '@/hooks/useAllUsersData';
import { createFileRoute } from '@tanstack/react-router';
import { FC } from 'react';

export const Route = createFileRoute('/user')({
  component: () => <UserPage />,
});

const UserPage: FC = () => {
  const { data, isLoading } = useAllUsersData();

  return (
    <>
      <UserInputForm />

      <List>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((user) => <UserListItem key={user.id} user={user} />)
        )}
      </List>
    </>
  );
};
