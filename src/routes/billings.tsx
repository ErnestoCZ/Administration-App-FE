import { createFileRoute } from '@tanstack/react-router';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Input } from '@/components/Input';
import List from '@/components/List';
import { InputController } from '@/Controller/InputController';
import { Stack } from '@/components/Stack';

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
      <Stack flexDirection='column'>
          <Input placeholder="Search for Billings" onChange={onSearchChange} />
          <form>
            <Stack flexDirection='row'>
              <InputController type='date' control={control} name='fromDate' />
              <InputController type='date' control={control} name='toDate'/>

            </Stack>
          </form>


        <List>
        </List>
      </Stack>
      <DevTool control={control} />
    </>
  );
};
