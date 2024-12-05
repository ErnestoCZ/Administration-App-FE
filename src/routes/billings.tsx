import { createFileRoute } from '@tanstack/react-router';
import { FC, useState } from 'react';
import { Billing, fakeBillings } from '../fakeData';
import { Stack } from '@/components/Stack';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useAllBillingsData } from '@/hooks/useAllBillingsData';
import { Input } from '@/components/Input';
import { Loader } from '@/components/Loader';
import List from '@/components/List';
import { ListItem } from '@/components/ListItem';
export const Route = createFileRoute('/billings')({
  component: () => <BillingsPage />,
  loader: (): Billing[] => {
    return fakeBillings;
  },
});

export const BillingsPage: FC = () => {
  const { data, isLoading } = useAllBillingsData();
  const [search, setSearch] = useState<string | undefined>();
  const [filteredData, setFilteredData] = useState<Billing[] | undefined>(data);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setFilteredData(
      data?.filter((billing) =>
        billing.month.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
    setSearch(searchTerm);
  };

  const { control } = useForm();
  return (
    <>
      <Stack direction={'column'}>
        <Input
          placeholder="Search for Billings"
          value={search}
          onChange={onSearchChange}
        />
        <List>
          {isLoading ? (
            <Loader />
          ) : (
            filteredData?.map((billing) => (
              <ListItem<Billing>
                key={billing.id}
                item={billing}
                renderItem={(billing) => <div>{billing.month}</div>}
              />
            ))
          )}
        </List>
      </Stack>
      <DevTool control={control} />
    </>
  );
};
