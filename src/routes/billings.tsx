import { createFileRoute } from '@tanstack/react-router';
import React, { FC, useState } from 'react';
import { Billing, fakeBillings } from '../fakeData';
import { Stack } from '@/components/Stack';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useAllBillingsData } from '@/hooks/useAllBillingsData';
import { Input } from '@/components/Input';
import { Loader } from '@/components/Loader';
import List from '@/components/List';
import { ListItem } from '@/components/ListItem';
import { Box } from '@chakra-ui/react';
import { Link } from '@/components/Link';

export const Route = createFileRoute('/billings')({
  component: () => <BillingsPage />,
  loader: (): Billing[] => {
    return fakeBillings;
  },
});

export const BillingsPage: FC = () => {
  const { control } = useForm();
  const { data, isLoading } = useAllBillingsData();
  const [searchString, setSearchString] = useState('');

  const searchBillingFunction = (billing: Billing): boolean => {
    if (billing.month.toLowerCase().includes(searchString)) {
      return true;
    }
    return false;
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchString(event.target.value.toLowerCase());
  };

  const renderBilling = (billing: Billing): React.ReactNode => {
    return (
      <>
        <Link
          key={billing.id}
          to={`/billing/$billingId`}
          params={{ billingId: billing.id }}
        >
          {billing.month}
        </Link>
        <Box>{`From ${billing.dateFrom} to ${billing.dateTo}`}</Box>
      </>
    );
  };

  return (
    <>
      <Stack direction={'column'}>
        <Input placeholder="Search for Billings" onChange={onSearchChange} />
        <List>
          {isLoading ? (
            <Loader />
          ) : (
            data
              ?.filter((billing) => searchBillingFunction(billing))
              .map((billing) => (
                <ListItem<Billing>
                  key={billing.id}
                  item={billing}
                  renderItem={renderBilling}
                />
              ))
          )}
        </List>
      </Stack>
      <DevTool control={control} />
    </>
  );
};
