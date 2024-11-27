import { DevTool } from '@hookform/devtools';
import { FC } from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { UserInputFormData } from '../../models/types';
import { addUser } from '../../services/usersAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FlexBox } from '../styles/Box.styled';
import { StyledSelect } from '../styles/Select.styled';
import { InputFieldComponent } from '../Form/InputFieldComponent';

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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <FlexBox $direction="column">
          <FlexBox $direction="column">
            <InputFieldComponent
              name={'First Name'}
              htmlId={'firstName'}
              type={'text'}
            />
            <InputFieldComponent
              name={'Last Name'}
              htmlId={'lastName'}
              type={'text'}
            />
            <InputFieldComponent
              name={'Email'}
              htmlId={'email'}
              type={'email'}
            />
          </FlexBox>
          <FlexBox>
            <StyledSelect {...methods.register('status', { required: true })}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </StyledSelect>
          </FlexBox>
          <FlexBox $direction="row">
            <button type="reset">Reset</button>
            <button type="submit">Add</button>
          </FlexBox>
        </FlexBox>
        <DevTool control={methods.control} />
      </form>
    </FormProvider>
  );
};
