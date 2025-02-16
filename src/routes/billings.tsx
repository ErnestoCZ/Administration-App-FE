import { createFileRoute } from '@tanstack/react-router';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Input } from '@/components/Input';
import List from '@/components/List';
import { Stack } from '@chakra-ui/react';

export const Route = createFileRoute('/billings')({
  component: () => <BillingsPage />,
});

const BillingsPage: FC = () => {
  const { control } = useForm();
  // const { data, isLoading } = useAllBillingsData();
  const [searchString, setSearchString] = useState('');


  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchString(event.target.value.toLowerCase());
  };

  return (
    <>
      <Stack direction={'column'}>
          <Input placeholder="Search for Billings" onChange={onSearchChange} />


        <List>
        </List>
      </Stack>
      <DevTool control={control} />
    </>
  );
};
