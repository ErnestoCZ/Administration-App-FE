import { DevTool } from '@hookform/devtools';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputController } from '@/Controller/InputController';
import { addUserFormSchema, addUserFormValues } from '@/models/types';
import { Stack } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { SAVE_USER } from '@/GraphQL/user.queries';

export const UserInputForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<addUserFormValues>({
    resolver: zodResolver(addUserFormSchema),
    errors: {},
  });

  const [newUserMutation] = useMutation(SAVE_USER);

  const onSubmitHandler: SubmitHandler<addUserFormValues> = async (
    data: addUserFormValues,
  ) => {
    const mutationResponse = await newUserMutation({
      variables: {
        userData: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        },
      },
    });
    console.log(mutationResponse.errors);
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
