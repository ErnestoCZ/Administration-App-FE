import { DevTool } from '@hookform/devtools';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserInputFormData } from '../../models/types';
import { addUser } from '../../services/usersAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Stack } from '../Stack';
import { Input } from '../Input';
import { Button } from '../Button';

export const UserInputForm: FC = () => {
  const { control, handleSubmit } = useForm<UserInputFormData>();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
    onMutate: (data) => {
      console.log('onMutate', data);
    },
    onError: (error) => {
      console.log('onError', error);
    },
    onSettled: (data, error) => {
      console.log('onSettled', data, error);
    },
  });

  const onSubmitHandler: SubmitHandler<UserInputFormData> = async (
    data: UserInputFormData,
  ) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Stack direction={'row'}>
        <Input type={'text'} placeholder="Name" />
        <Input type={'email'} placeholder="Email" />
        <Input type={'password'} placeholder="Password" />
        <Button type="reset" style={'delete'}>
          Clear
        </Button>
        <Button type="submit" style="secondary">
          Add
        </Button>
      </Stack>
      <DevTool control={control} />
    </form>
  );
};
