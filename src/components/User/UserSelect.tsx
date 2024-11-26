import { User } from '@/models/types';
import { useAllUsersData } from '@/hooks/useAllUsersData';
import React from 'react';

export const UserSelect: React.FC = () => {
  const { data, isLoading } = useAllUsersData();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const users = data as User[];
  return (
    <div>
      <select name="users" id="users">
        {users?.map((user) => (
          <option key={user.id} value={user.id}>
            {user.firstName} {user.lastName}
          </option>
        ))}
      </select>
    </div>
  );
};
