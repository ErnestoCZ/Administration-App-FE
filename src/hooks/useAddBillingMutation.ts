import { createBilling } from '@/services/billingsAPI';
import { useQueryClient, useMutation } from '@tanstack/react-query';

export const useAddBillingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBilling,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['billings'] }),
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
