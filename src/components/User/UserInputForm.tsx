import { DevTool } from '@hookform/devtools';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserInputFormData } from '../../models/types';
import { addUser } from '../../services/usersAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FlexBox } from '../styles/Box.styled';

export const UserInputForm: FC = () => {
  const { control, register, handleSubmit } = useForm<UserInputFormData>();
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
      <FlexBox $direction="column">
        <FlexBox $direction="column">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            {...register('firstName', { required: true })}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...register('lastName', { required: true })}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
          />
        </FlexBox>
        <FlexBox>
          <select {...register('status', { required: true })}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </FlexBox>
        <FlexBox $direction="row">
          <button>Reset</button>
          <button>Add</button>
        </FlexBox>
      </FlexBox>
      <DevTool control={control} />
    </form>
  );
};
