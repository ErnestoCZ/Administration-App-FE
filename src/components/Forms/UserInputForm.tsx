import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import { UserFormSchema, UserFormData } from '@/types/types';
import { useAddUserMutation } from '@/hooks/useUserMutation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '../Stack';
import { InputController } from '@/Controller/InputController';
import { Button } from '../Button';

const UserInputForm = () => {
  const {
    control,
    handleSubmit: userHandleSubmit,
    formState: { errors: userFormErrors },
  } = useForm<UserFormData>({ resolver: zodResolver(UserFormSchema) });

  const mutation = useAddUserMutation();
  const userFormHandler = async (data: UserFormData) => {
    const res = await mutation.mutateAsync(data);
    console.log(res);
  };

  return (
    <>
      <form onSubmit={userHandleSubmit(userFormHandler)}>
        <Stack flexDirection="column" justifyContent="space-around">
          <InputController
            control={control}
            name="firstName"
            type="text"
            defaulValue=""
            placeholder="firstName"
          ></InputController>
          <InputController
            control={control}
            name="lastName"
            type="text"
            defaulValue=""
            placeholder="lastName"
          ></InputController>
          <InputController
            control={control}
            name="email"
            type="email"
            defaulValue=""
            placeholder="email"
          ></InputController>
          {userFormErrors.root ? <div>userFormErrors.email.message</div> : ''}
          <Stack>
            <Button type="reset">Reset</Button>
            <Button type="submit">Submit</Button>
          </Stack>
        </Stack>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default UserInputForm;
