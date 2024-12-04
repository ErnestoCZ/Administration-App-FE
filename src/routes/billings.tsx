import { createFileRoute } from '@tanstack/react-router';
import { FC } from 'react';
import { Billing, fakeBillings } from '../fakeData';
import { Stack } from '@/components/Stack';
import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useAllBillingsData } from '@/hooks/useAllBillingsData';
import { Input } from '@/components/Input';
import { Flex } from '@/components/Flex';
export const Route = createFileRoute('/billings')({
  component: () => <BillingsPage />,
  loader: (): Billing[] => {
    return fakeBillings;
  },
});

const StyledContentBox = styled.div`
  background: white;
  border-radius: 5px;
  width: 100%;
  padding: 1rem;
  opacity: 0.8;
`;

export const BillingsPage: FC = () => {
  const { data, isLoading } = useAllBillingsData();

  const { control } = useForm();
  return (
    <>
      <Stack direction={'column'}>
        <Input placeholder="Search for Billing" />
        <StyledContentBox>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data?.map((billing) => <Flex>{billing.month}</Flex>)
          )}
        </StyledContentBox>
      </Stack>
      <DevTool control={control} />
    </>
  );
};
