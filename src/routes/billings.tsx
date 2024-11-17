import { createFileRoute, Link } from '@tanstack/react-router'
import { FC } from 'react'
import { Billing, fakeBillings } from '../fakeData'
import { Box, Button, Flex } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export const Route = createFileRoute('/billings')({
  component: () => <BillingsPage/>,
  loader: () : Billing[] => {
    return fakeBillings;
  }
})


type FilterFormData = {
  dateFrom: string;
  dateTo: string;
}

export const BillingsPage : FC = () => {
  const billings = Route.useLoaderData<Billing[]>();
  const {control, handleSubmit, register} = useForm();

  const onSubmitHandler : SubmitHandler<FilterFormData>= (data: FilterFormData) => {
    console.log(data);
  }

  return (
    <>
    
    <Box flexDirection={'column'} flex={'1 1 auto'} margin={'1vh'} padding={'1vh'} background={'gray.100'} borderRadius={'2vh'}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Flex flexDirection={'column'} >
          <label>Filter</label>

          <label >Date</label>
          <label htmlFor='dateFrom'>From:</label>
          <input type='date' {...register('dateFrom',{required:true})}/>
          <label htmlFor='dateTo'>To:</label>
          <input type='date' {...register('dateTo',{required:true})}/>
          <label>Amount</label>
          <label htmlFor='amountFrom'>From</label>
          <input type='number' {...register('amountFrom')}/>
          <label htmlFor='amountTo'>To:</label>
          <input type='number' {...register('amountTo')}/>
          <Flex>
          <Button type='submit'>Filter</Button>
          <Button type='reset' variant={'reset'} >Reset</Button>
          </Flex>
          
        </Flex>
      </form>
    </Box>
    <Box borderRadius={'2vh'} flexDirection={'column'} flex={'6 1 auto'} background={'gray.100'} margin={'1vh'}>
      {billings.map((billing) => <Box borderRadius={'5px'} margin={'1vh'} padding={'1vh'} background={'primary'} display={'flex'} justifyContent={'space-between'}><Box>{billing.month} {billing.amount}</Box><Link to={`/billing/${billing.id}`}><ArrowForwardIcon/></Link></Box>)}
    </Box>
    
    <DevTool control={control}/>

    </>
  )
}
