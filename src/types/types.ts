import z from 'zod';

export const UUIDSchema = z.string().uuid();
export type UUID = z.infer<typeof UUIDSchema>;

export const UserFormSchema = z.object({
  firstName: z.string({ message: 'first name is required' }),
  lastName: z.string({ message: 'last name is required' }),
  email: z.string().email({ message: 'email is required' }),
});
export type UserFormData = z.infer<typeof UserFormSchema>;

export const ConstantsFormSchema = z.object({});
export type ConstantsFormData = z.infer<typeof ConstantsFormSchema>;
