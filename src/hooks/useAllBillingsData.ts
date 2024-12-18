import { useQuery } from '@tanstack/react-query';
import { getAllBillings } from '@/services/billingsAPI';

export const useAllBillingsData = () => {
  return useQuery({
    queryKey: ['billings'],
    queryFn: getAllBillings,
  });
};
