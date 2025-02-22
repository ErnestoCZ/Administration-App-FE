import { Box } from '@/components/Box';
import { Input } from '@/components/Input';
import { Stack } from '@/components/Stack';
import { createFileRoute } from '@tanstack/react-router';
import UserInputForm from '@/components/Forms/UserInputForm';
import styled from 'styled-components';
import ConstantsInputForm from '@/components/Forms/ConstantsInputForm';

const StyledControlBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: white;
  justify-content: space-around;
  position: relative;
`;

export const Route = createFileRoute('/control')({
  component: () => <ControlPage />,
});

export const ControlPage = () => {
  return (
    <StyledControlBox>
      <Stack
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Box key={'userForm'}>
          <UserInputForm />
        </Box>

        <Box key={'constantsForm'}>
          <ConstantsInputForm />
        </Box>
      </Stack>

      <Stack
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Box key={'UserList'} height={'100%'}>
          <Input type="text" placeholder="Search" />
          Render list of Users here!
        </Box>
      </Stack>
    </StyledControlBox>
  );
};
