import { UserInputForm } from '@/components/User/UserInputForm';
import { UserListItem } from '@/components/User/UserListItem';
import { useAllUsersData } from '@/hooks/useAllUsersData';
import { createFileRoute } from '@tanstack/react-router';
import { FC, useState } from 'react';
import { Input } from '@/components/Input';
import { Flex } from '@/components/Flex';
import List from '@/components/List';

export const Route = createFileRoute('/user')({
  component: () => <UserPage />,
});

const UserPage: FC = () => {
  const { data, isLoading } = useAllUsersData();
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
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
          <div>Loading...</div>
        ) : (
          data?.map((user) => <UserListItem key={user.id} user={user} />)
        )}
      </List>
    </>
  );
};
