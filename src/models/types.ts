import { z } from 'zod';

export const User = z.object({
  id: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

export const UserList = z.array(User);

export const UserInputFormData = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  status: z.enum(['active', 'inactive']),
});

//Inferred types
export type User = z.infer<typeof User>;
export type UserList = z.infer<typeof UserList>;
export type UserInputFormData = z.infer<typeof UserInputFormData>;