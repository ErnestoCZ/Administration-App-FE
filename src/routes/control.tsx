import { Stack } from '@/components/Stack'
import { createFileRoute } from '@tanstack/react-router'
import styled from 'styled-components'


const StyledControlBox = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 100%;
  height: 100%; */
  background-color: aliceblue;
  justify-content: space-around;
`

export const Route = createFileRoute('/control')({
  component: () => <ControlPage/>,
})


export const ControlPage = () => {
  return (
    <StyledControlBox>

     <Stack flexDirection='column'>
      Forms
      </Stack> 

    </StyledControlBox>
  )
}
