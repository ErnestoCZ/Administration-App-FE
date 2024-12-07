import { addUserFormValues, User } from '../models/types';
import { baseAddress } from './apiConstants';
import { z } from 'zod';

export const UserList = z.array(User);
export type UserList = z.infer<typeof UserList>;

export async function getUsers(): Promise<User[]> {
  const res = await fetch(`${baseAddress}/users`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  });

  if (!res.ok) {
    throw new Error('Error fetching users');
  }
  const userList: User[] = await UserList.parse(await res.json());

  return userList;
}

export async function addUser(user: addUserFormValues): Promise<User> {
  const res = await fetch(`${baseAddress}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error('Error adding user');
  }

  return await User.parse(await res.json());
}

export async function deleteUser(id: string): Promise<void> {
  const res = await fetch(`${baseAddress}/users/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  });

  if (!res.ok) {
    throw new Error('Error deleting user');
  }
  return await res.json();
}
