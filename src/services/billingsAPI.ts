//TODO - create CRUD functions for billings

import { z } from 'zod';
import { baseAddress } from './apiConstants';

const BillingSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  dateFrom: z.date(),
  dateTo: z.date().optional(),
});

export type Billing = z.infer<typeof BillingSchema>;

export const getAllBillings = async (): Promise<Billing[]> => {
  const response = await fetch(`${baseAddress}/billings`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch billings');
  }

  const billings: Billing[] = await BillingSchema.array().parse(
    await response.json(),
  );
  return billings;
};

export const createBilling = async (newBilling: {
  name: string;
  dateFrom: Date;
  dateTo?: Date | undefined;
}): Promise<Billing> => {
  const response = await fetch(`${baseAddress}/billings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBilling),
  });
  console.log(response);
  if (!response.ok) {
    throw new Error('Failed to create billing');
  }
  return await BillingSchema.parse(await response.json());
};
