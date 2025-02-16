import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/billing/$billingId')({
  component: () => <BillingByIdComponent />,
});

export const BillingByIdComponent = () => {

  return (
    <>
    </>
  );
};
