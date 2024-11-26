import { createFileRoute } from '@tanstack/react-router';
import { Billing, fakeBillings } from '../fakeData';
export const Route = createFileRoute('/billing/$billingId')({
  loader: ({ params }): Billing | undefined => {
    const foundBilling = fakeBillings.find(
      (billing) => billing.id === Number(params.billingId),
    );
    return foundBilling;
  },
  component: () => <BillingByIdComponent />,
});

export const BillingByIdComponent = () => {
  const billing = Route.useLoaderData<Billing>();

  return <div></div>;
};
