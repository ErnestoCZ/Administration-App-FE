import { StyledSelect } from '../styles/Select.styled';
import { useAllUsersData } from '@/hooks/useAllUsersData';
import { User } from '@/models/types';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

export const UserSelectComponent: FC = () => {
  const { data, isLoading } = useAllUsersData();
  const { register } = useFormContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const fetchedUsers: User[] = data as User[];

  return (
    <StyledSelect {...register('userId', { required: true })}>
      {fetchedUsers?.map((user) => (
        <option key={user.id} value={user.id}>
          {user.lastName}, {user.firstName}
        </option>
      ))}
    </StyledSelect>
  );
};
