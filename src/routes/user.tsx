import { UserInputForm } from '@/components/User/UserInputForm';
import { useAllUsersData } from '@/hooks/useAllUsersData';
import { createFileRoute, Link } from '@tanstack/react-router';
import { FC, useState } from 'react';
import { Input } from '@/components/Input';
import List from '@/components/List';
import { Loader } from '@/components/Loader';
import { User } from '@/models/types';
import { ListItem } from '@/components/ListItem';
import { Box } from '@chakra-ui/react';
import { IoMdArrowForward } from 'react-icons/io';
import { Flex } from '@/components/Flex';
export const Route = createFileRoute('/user')({
  component: () => <UserPage />,
});

const UserPage: FC = () => {
  const { data, isLoading } = useAllUsersData();
  const [searchString, setSearchString] = useState<string>('');

  const filterFunction = (user: User): boolean => {
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

  const renderUserFunction = (user: User): React.ReactNode => {
    return (
      <>
        <Box>
          {user.firstName} {user.lastName}
        </Box>
        <Box>
          <Link to="/about">
            <IoMdArrowForward></IoMdArrowForward>
          </Link>
        </Box>
      </>
    );
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
            ?.filter((user) => filterFunction(user))
            .map((user) => (
              <ListItem<User>
                key={user.id}
                item={user}
                renderItem={renderUserFunction}
              />
            ))
        )}
      </List>
    </>
  );
};
