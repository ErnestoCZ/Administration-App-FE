import { StyledSelect } from '../styles/Select.styled';
import { useAllUsersData } from '@/hooks/useAllUsersData';
import { User } from '@/models/types';
import { FC } from 'react';

interface UserSelectProps {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  value?: string;
}

export const UserSelect: FC<UserSelectProps> = ({
  onChange,
  onBlur,
  value,
}) => {
  const { data, isLoading } = useAllUsersData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const fetchedUsers: User[] = data as User[];

  return (
    <StyledSelect onChange={onChange} onBlur={onBlur} value={value}>
      {fetchedUsers?.map((user) => (
        <option key={user.id} value={user.id}>
          {user.lastName}, {user.firstName}
        </option>
      ))}
    </StyledSelect>
  );
};
