import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Stack } from '@/components/Stack'
import { InputController } from '@/Controller/InputController'
import { DevTool } from '@hookform/devtools'
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import z from 'zod'
import styled from 'styled-components'
import { zodResolver } from '@hookform/resolvers/zod'


const StyledControlBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%; 
  background-color: white;
  justify-content: space-around;
  position:relative;
`

//Form settings
const UserFormSchema = z.object({
  firstName: z.string({message: 'first name is required'}),
  lastName: z.string({message: 'last name is required'}),
  email: z.string().email({message: 'email is required'})
})
type UserFormData = z.infer<typeof UserFormSchema>;

const ConstantsFormSchema = z.object({

})
type ConstantsFormData = z.infer<typeof ConstantsFormSchema>

const userFormHandler = (data: UserFormData) => {
  console.log('User form executed: ' + data)

}

const constantsFormHandler = (data: ConstantsFormData) => {
  console.log('Constants Form executed: ' + data )

}


export const Route = createFileRoute('/control')({
  component: () => <ControlPage/>,
})




export const ControlPage = () => {
  const {control: userFormControl, handleSubmit : userHandleSubmit, formState: {errors:userFormErrors}} = useForm<UserFormData>({resolver: zodResolver(UserFormSchema)});
  const {control: constantsFormControl, handleSubmit: constantsHandleSubmit} = useForm<ConstantsFormData>({resolver: zodResolver(ConstantsFormSchema)});

  return (
    <StyledControlBox>

     <Stack flexDirection='column' justifyContent='flex-start' alignItems='center'>

      <Box key={'userForm'}>
      <form onSubmit={userHandleSubmit(userFormHandler)}>
        <Stack flexDirection='column' justifyContent='space-around'>
        <InputController control={userFormControl} name='firstName' type='text' defaulValue='' placeholder='firstName' ></InputController>
        <InputController control={userFormControl} name='lastName' type='text' defaulValue='' placeholder='lastName' ></InputController>
        <InputController control={userFormControl} name='email' type='email' defaulValue='' placeholder='email' ></InputController>
        {userFormErrors.root ? <div>userFormErrors.email.message</div>: ''}
        <Stack>
          <Button type='reset'>Reset</Button>
          <Button type='submit'>Submit</Button>
        </Stack>

        </Stack>
      </form>
      <DevTool control={userFormControl} />
      </Box>

      <Box key={'constantsForm'}>
      <form onSubmit={constantsHandleSubmit(constantsFormHandler)}>
        <Stack flexDirection='column'>
          Form for Constants and other things corresponding to Billing
        </Stack>
      </form>

      </Box>
      </Stack> 

      <Stack flexDirection='column' justifyContent='flex-start' alignItems='center' >
          <Box key={'UserList'} height={'100%'}>
          <Input type='text' placeholder='Search'/>

          Render list of Users here!

          </Box>

      </Stack>

    </StyledControlBox>
  )
}
