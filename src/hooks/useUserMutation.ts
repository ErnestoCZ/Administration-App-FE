import { addUserService } from '@/services/usersAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAddUserMutation = () => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationKey: ['addUser'],
    mutationFn: addUserService,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['users'] });
    },
  });
  return mutation;
};
