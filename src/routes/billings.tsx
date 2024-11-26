import { createFileRoute } from '@tanstack/react-router';
import { FC } from 'react';
import { Billing, fakeBillings } from '../fakeData';
export const Route = createFileRoute('/billings')({
  component: () => <BillingsPage />,
  loader: (): Billing[] => {
    return fakeBillings;
  },
});

export const BillingsPage: FC = () => {
  return (
    <>
      <div></div>
    </>
  );
};
