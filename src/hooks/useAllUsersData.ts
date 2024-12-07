import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services/usersAPI';

export const useAllUsersData = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};
