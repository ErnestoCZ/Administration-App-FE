import { getAllUserService } from '@/services/usersAPI';
import { useQuery } from '@tanstack/react-query';

export const useUsers = () => {
  const r = useQuery({ queryKey: ['users'], queryFn: getAllUserService });
  return r;
};
