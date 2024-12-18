import { createFileRoute } from '@tanstack/react-router';
import { Box, Separator, Stack } from '@chakra-ui/react';
import { Flex } from '@/components/Flex';
import { Label } from '@/components/Label';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from '@/models/types';
import React, { useState } from 'react';
import { DevTool } from '@hookform/devtools';
import { SelectController } from '@/Controller/SelectController';
import List from '@/components/List';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAllUsersData } from '@/hooks/useAllUsersData';
import { ListItem } from '@/components/ListItem';
import { IoCloseSharp } from 'react-icons/io5';
import { InputController } from '@/Controller/InputController';
import { useAllBillingsData } from '@/hooks/useAllBillingsData';

export const Route = createFileRoute('/billing/$billingId')({
  component: () => <BillingByIdComponent />,
});

const addUserSchema = z.object({
  usersUUID: z.string().uuid(),
});
type addUserFormValues = z.infer<typeof addUserSchema>;

export const BillingByIdComponent = () => {
  const { data, isLoading } = useAllBillingsData();
  const users = useAllUsersData();
  const { control, handleSubmit } = useForm<addUserFormValues>({
    resolver: zodResolver(addUserSchema),
  });
  const [userList, setUserList] = useState<User[]>([]);

  const onSubmitHandler: SubmitHandler<addUserFormValues> = async (
    data: addUserFormValues,
  ) => {
    const user = users.data?.find((user) => user.id === data.usersUUID);
    if (user && !userList.find((u) => u.id === user.id)) {
      setUserList([...userList, user]);
    }
  };

  const RenderUserFunction = (user: User): React.ReactNode => {
    const { control } = useForm({});
    return (
      <>
        <Flex justifyContent="space-between">
          {user.firstName} {user.lastName}
          <IoCloseSharp
            onClick={(e) => {
              e.preventDefault();
              setUserList(userList.filter((e) => e.id != user.id));
            }}
          />
          <InputController control={control} name="Constant1" />
          <InputController control={control} name="Constant2" />
          <InputController control={control} name="Constant3" />
        </Flex>
        <DevTool control={control} />
      </>
    );
  };

  return (
    <>
      <Label>{data?.name}</Label>
      <Stack direction={'row'}>
        <Stack direction={'column'}>
          <Label colorScheme="secondary">Details</Label>
          <Separator />
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
        <Stack direction={'column'} width={'100%'}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <SelectController control={control} name="usersUUID" rules={{}} />
            <Button type="submit">Add User to Billing</Button>
          </form>
          <Separator />
          <List>
            {userList.map((user) => (
              <ListItem<User>
                key={user.id}
                item={user}
                renderItem={RenderUserFunction}
              />
            ))}
          </List>
        </Stack>
      </Stack>
      <DevTool control={control} />
    </>
  );
};
