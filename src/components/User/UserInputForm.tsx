import { DevTool } from '@hookform/devtools';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserInputFormData } from '../../models/types';
import { addUser } from '../../services/usersAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FlexBox } from '../styles/Box.styled';
import { StyledSelect } from '../styles/Select.styled';
import { Button } from '../Button';
import { Stack } from '../Stack';

export const UserInputForm: FC = () => {
  const methods = useForm<UserInputFormData>();
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
    <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
      <FlexBox $direction="column">
        <FlexBox>
          <StyledSelect {...methods.register('status', { required: true })}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </StyledSelect>
        </FlexBox>
        <Stack direction={'row'}>
          <Button type={'reset'}>Reset</Button>
          <Button type={'submit'} style={'secondary'}>
            Submit
          </Button>
        </Stack>
      </FlexBox>
      <DevTool control={methods.control} />
    </form>
  );
};
