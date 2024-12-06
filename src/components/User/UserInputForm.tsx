import { DevTool } from '@hookform/devtools';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Stack } from '../Stack';
import { Button } from '../Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputController } from '@/Controller/InputController';
import { useAddUserMutation } from '@/hooks/useAddUserMutation';
import { addUserFormSchema, addUserFormValues } from '@/models/types';

export const UserInputForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<addUserFormValues>({
    resolver: zodResolver(addUserFormSchema),
    errors: {},
  });

  const addUserMutation = useAddUserMutation();

  const onSubmitHandler: SubmitHandler<addUserFormValues> = async (
    data: addUserFormValues,
  ) => {
    console.log(data);
    await addUserMutation.mutate(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <>
      <Stack direction={'row'}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <InputController
            name="firstName"
            control={control}
            rules={{}}
            placeholder="First name"
          />
          <InputController
            name="lastName"
            control={control}
            rules={{}}
            placeholder="Last Name"
          />
          <InputController
            name="email"
            control={control}
            rules={{}}
            placeholder="Email"
          />
          <Button type="reset" style={'delete'}>
            Clear
          </Button>
          <Button type="submit" disabled={isSubmitting} style="secondary">
            {isSubmitting ? 'Adding...' : 'Add User'}
          </Button>
        </form>
      </Stack>
      <DevTool control={control} />
    </>
  );
};
