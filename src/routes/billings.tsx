import { Box, Button } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { FC } from 'react'
import styled from 'styled-components'
import { Billing, fakeBillings } from '../fakeData'

export const Route = createFileRoute('/billings')({
  component: () => <BillingsPage/>,
  loader: () : Billing[] => {
    return fakeBillings;
  }
})

const BillingsPageWrapper = styled(Box)`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 40vh;
width: 100%;
`

const ContentBox = styled(Box)`
flex-direction: column;
background-color: aliceblue;
height: 100%;
min-width: 30%;
width: 30%;
`
const BillingBox = styled(Box)`
flex-direction: column;
background-color: aliceblue;
height: 100%;
min-width: 65%;`

export const BillingsPage : FC = () => {
  const billings = Route.useLoaderData<Billing[]>();
  return (


    <>
  <BillingsPageWrapper>

    <ContentBox >

    <Box>Filter</Box>
    <Box>Overview</Box>
    <Button variant={'base'}>Hallo</Button>
    </ContentBox>

    <BillingBox>
    {billings.map((billing) => <Box key={billing.id}>{billing.title}</Box>)}
    </BillingBox>

  </BillingsPageWrapper>
    
    </>
  )
}
