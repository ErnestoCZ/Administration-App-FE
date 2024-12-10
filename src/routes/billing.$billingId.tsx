import { createFileRoute } from '@tanstack/react-router';
import { Billing, fakeBillings } from '../fakeData';
import { Box, Stack } from '@chakra-ui/react';
import { Flex } from '@/components/Flex';
import { Label } from '@/components/Label';
import { Input } from '@/components/Input';
import List from '@/components/List';
import { Button } from '@/components/Button';
import { UserSelect } from '@/components/UserSelect';
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
    <>
      <Label>{data?.month}</Label>
      <Stack direction={'row'}>
        <Stack direction={'column'}>
          <Label colorScheme="secondary">Details</Label>
          <Flex direction="column">
            <Box>{data?.month}</Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Label colorScheme="secondary">From:</Label>
              <Input type="text" value={`${data?.dateFrom}`} />
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Label colorScheme="secondary">To:</Label>
              <Input type="text" value={`${data?.dateTo}`} />
            </Box>

            <Box>
              <Label colorScheme="secondary">Constants:</Label>
              <p>Constant 1</p>
              <p>Constant 2</p>
              <p>Constant 3</p>
            </Box>
          </Flex>
        </Stack>
        <Stack direction={'column'}>
          <Flex direction={'column'}>
            <Button>Add User to Billing</Button>
            <UserSelect />
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};
