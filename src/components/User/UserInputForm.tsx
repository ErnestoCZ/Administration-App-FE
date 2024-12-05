import { DevTool } from '@hookform/devtools';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { addUser } from '../../services/usersAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Stack } from '../Stack';
import { Button } from '../Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputController } from '@/Controller/InputController';

const formSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2).optional(),
  email: z.string().email(),
  status: z.enum(['active', 'inactive']).optional(),
});

type formValues = z.infer<typeof formSchema>;

export const UserInputForm: FC = () => {
  const { control, handleSubmit } = useForm<formValues>({
    resolver: zodResolver(formSchema),
    errors: {},
  });
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

  const onSubmitHandler: SubmitHandler<formValues> = async (
    data: formValues,
  ) => {
    console.log(data);
    // mutation.mutate(data);
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
          <Button type="submit" style="secondary">
            Add
          </Button>
        </form>
      </Stack>
      <DevTool control={control} />
    </>
  );
};
