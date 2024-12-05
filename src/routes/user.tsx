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
  const [search, setSearch] = useState<string | undefined>();
  const [filteredData, setFilteredData] = useState<User[] | undefined>(data);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setFilteredData(
      filteredData?.filter((user) =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
    setSearch(searchTerm);
  };

  return (
    <>
      <Flex>
        <Input
          placeholder="Search for User"
          onChange={onSearchChange}
          value={search}
        />
        <UserInputForm />
      </Flex>
      <List>
        {isLoading ? (
          <Loader />
        ) : (
          filteredData?.map((user) => (
            <UserListItem key={user.id} user={user} />
          ))
        )}
      </List>
    </>
  );
};
