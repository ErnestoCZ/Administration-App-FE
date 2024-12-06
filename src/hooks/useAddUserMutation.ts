import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addUser } from '@/services/usersAPI';

export const useAddUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
    onMutate: (data) => {
      console.log('onMutate', data);
    },
    onError: (error) => {
      console.log('onError', error);
    },
    onSettled: (data, error) => {
      console.log('onSettled', data, error);
    },
  });
};
