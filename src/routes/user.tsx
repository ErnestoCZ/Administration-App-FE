import { UserInputForm } from '@/components/User/UserInputForm';
import { UserListComponent } from '@/components/User/UserListComponent';
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

      <UserListComponent>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((user) => (
            <div key={user.id}>
              {user.lastName}, {user.firstName}
            </div>
          ))
        )}
      </UserListComponent>
    </>
  );
};
