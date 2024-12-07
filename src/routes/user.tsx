import { UserInputForm } from '@/components/User/UserInputForm';
import { UserListItem } from '@/components/User/UserListItem';
import { useAllUsersData } from '@/hooks/useAllUsersData';
import { createFileRoute } from '@tanstack/react-router';
import { FC, useState } from 'react';
import { Input } from '@/components/Input';
import { Flex } from '@/components/Flex';
import List from '@/components/List';
import { Loader } from '@/components/Loader';
import { User } from '@/models/types';

export const Route = createFileRoute('/user')({
  component: () => <UserPage />,
});

const UserPage: FC = () => {
  const { data, isLoading } = useAllUsersData();
  const [searchString, setSearchString] = useState<string>('');

  const searchUserFunction = (user: User): boolean => {
    if (
      user.firstName.toLowerCase().includes(searchString) ||
      user.lastName.toLowerCase().includes(searchString)
    ) {
      return true;
    }
    return false;
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchString(e.target.value.toLowerCase());
  };
  return (
    <>
      <Flex>
        <Input placeholder="Search for User" onChange={onSearchChange} />
        <UserInputForm />
      </Flex>
      <List>
        {isLoading ? (
          <Loader />
        ) : (
          data
            ?.filter((user) => searchUserFunction(user as User))
            .map((user) => <UserListItem key={user.id} user={user} />)
        )}
      </List>
    </>
  );
};
