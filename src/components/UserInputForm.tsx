import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { DevTool } from '@hookform/devtools';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserInputFormData } from '../models/types';
import { addUser } from '../services/usersAPI';
import { User } from '../models/types';

export const UserInputForm: FC = () => {
  const { control, register, handleSubmit } = useForm<UserInputFormData>();

  const onSubmitHandler: SubmitHandler<UserInputFormData> = async (
    data: UserInputFormData,
  ) => {
    const createdUser: User = await addUser(data);
    console.log(createdUser);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <FormControl
        background={'white'}
        p={2}
        flexDirection={'column'}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <Flex direction={'column'}>
          <Flex direction={'column'}>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              type="text"
              id="firstName"
              {...register('firstName', { required: true })}
            />
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              type="text"
              id="lastName"
              {...register('lastName', { required: true })}
            />
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              {...register('email', { required: true })}
            />
          </Flex>
          <Flex direction={'row'} m={1}>
            <Select {...register('status', { required: true })}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
          </Flex>
          <Flex>
            <Button type="reset" variant={'reset'} m={2}>
              Reset
            </Button>
            <Button type="submit" variant={'submit'} m={2}>
              Add
            </Button>
          </Flex>
        </Flex>
        <DevTool control={control} />
      </FormControl>
    </form>
  );
};
