import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Separator } from '@/components/Separator'
import { Stack } from '@/components/Stack'
import { InputController } from '@/Controller/InputController'
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'


const StyledControlBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%; 
  background-color: white;
  justify-content: space-around;
  position:relative;
`



export const Route = createFileRoute('/control')({
  component: () => <ControlPage/>,
})


export const ControlPage = () => {
  const {control: userFormControl, handleSubmit : userHandleSubmit} = useForm();
  const {control: constantsFormControl, handleSubmit: constantsHandleSubmit} = useForm();

  return (
    <StyledControlBox>

     <Stack flexDirection='column' justifyContent='flex-start' alignItems='center'>

      <Box>
      <form>
        <Stack flexDirection='column'>
        <InputController control={userFormControl} name='firstName' type='text' defaulValue='' placeholder='firstName' ></InputController>
        <InputController control={userFormControl} name='lastName' type='text' defaulValue='' placeholder='lastName' ></InputController>
        <InputController control={userFormControl} name='email' type='email' defaulValue='' placeholder='email' ></InputController>
        <Stack>
          <Button type='reset'>Reset</Button>
          <Button type='submit'>Submit</Button>
        </Stack>

        </Stack>

      </form>
      </Box>

      <Box>
      <form>
        <Stack flexDirection='column'>
          Form for Constants and other things corresponding to Billing
        </Stack>
      </form>

      </Box>
      </Stack> 

      <Stack flexDirection='column' justifyContent='flex-start' alignItems='center' >
          <Box>
          <Input type='text'/>

          Render list of Users here!

          </Box>

      </Stack>

    </StyledControlBox>
  )
}
