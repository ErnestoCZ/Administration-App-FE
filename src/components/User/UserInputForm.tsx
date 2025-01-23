import { DevTool } from '@hookform/devtools';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputController } from '@/Controller/InputController';
import { addUserFormSchema, addUserFormValues } from '@/models/types';
import { Stack } from '@chakra-ui/react';
import { useNewUser } from '@/GraphQL/user.queries';

export const UserInputForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<addUserFormValues>({
    resolver: zodResolver(addUserFormSchema),
    errors: {},
  });

  const [createNewUser] = useNewUser();

  const onSubmitHandler: SubmitHandler<addUserFormValues> = async (
    data: addUserFormValues,
  ) => {
    const mutationResponse = await createNewUser({
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
