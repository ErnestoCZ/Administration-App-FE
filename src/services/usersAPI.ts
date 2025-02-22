import { UUID } from '@/types/types';
import axios from 'axios';
import z from 'zod';

const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
});
type User = z.infer<typeof UserSchema>;

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: { 'Content-Type': 'application/json' },
});

export const getAllUserService = async (): Promise<User[]> => {
  const response = await axiosInstance.get('v1/users', {});

  console.log(response);

  if (response.statusText === 'OK') {
    const parsedUsers = UserSchema.array().parse(response.data);
    return parsedUsers;
  } else {
    throw new Error('Error by fetching user');
  }
};

export const getSingleUserByIdService = async (id: UUID): Promise<User> => {
  const response = await axiosInstance.get(`v1/users/${id}`, {});
  console.log(response.request);

  if (response.statusText === 'OK') {
    const parsedUser = UserSchema.parse(response.data);
    return parsedUser;
  } else {
    throw new Error('Error by fetching single user by id');
  }
};

export const addUserService = async (user: any): Promise<User> => {
  const response = await axiosInstance.post('v1/users/', user);

  console.log(response);
  if (response.statusText === 'Created') {
    return UserSchema.parse(response.data);
  } else {
    throw new Error('Failed to add new useer');
  }
};
