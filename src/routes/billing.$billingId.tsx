import { createFileRoute } from '@tanstack/react-router'
import { Billing, fakeBillings, fakeUsers , User} from '../fakeData'
export const Route = createFileRoute('/billing/$billingId')({
  loader: ( {params} ) : Billing | undefined => {

    const foundBilling = fakeBillings.find((billing) => billing.id === Number(params.billingId));
    return foundBilling;
  },
  component: () => <BillingByIdComponent/>,
})


export const BillingByIdComponent = () => {

  const users : User[] = fakeUsers; 
  const {billingId} = Route.useParams();
  return (
    <div>
      <h1>{billingId}
      </h1>
    </div>
  )
}