import { UserInputFormData } from '../models/types';
import { User, UserList } from '../models/types';
import { baseAddress } from './apiConstants';

export const fetchAllUsersKey = 'users';

export async function getUsers(): Promise<User[]> {
  const res = await fetch(`${baseAddress}/users`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  });

  if (!res.ok) {
    throw new Error('Error fetching users');
  }
  console.log(res);
  const userList: User[] = await UserList.parse(await res.json());

  console.log(userList);
  return userList;
}

export async function addUser(user: UserInputFormData): Promise<User> {
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
