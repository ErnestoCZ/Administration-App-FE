import { createFileRoute } from '@tanstack/react-router';
import { Billing, fakeBillings } from '../fakeData';
import { Stack } from '@/components/Stack';
import { Box, Flex } from '@chakra-ui/react';
export const Route = createFileRoute('/billing/$billingId')({
  loader: ({ params }): Billing | undefined => {
    const foundBilling = fakeBillings.find(
      (billing) => billing.id === params.billingId,
    );

    return foundBilling;
  },
  component: () => <BillingByIdComponent />,
});

export const BillingByIdComponent = () => {
  const data = Route.useLoaderData();

  return (
    <Stack direction={'column'}>
      <Flex>
        <div>{data?.month}</div>
      </Flex>
      <Flex>
        <Box>{`From ${data?.dateFrom} to ${data?.dateTo}`}</Box>
      </Flex>
    </Stack>
  );
};
