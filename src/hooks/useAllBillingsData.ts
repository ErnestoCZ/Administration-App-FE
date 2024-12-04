import { useQuery } from '@tanstack/react-query';
import { fetchAllBillingsKey } from './../services/billingsAPI';
import { fakeBillings } from '@/fakeData';

export const useAllBillingsData = () => {
  return useQuery({
    queryKey: [fetchAllBillingsKey],
    queryFn: () => {
      return fakeBillings;
    },
  });
};
