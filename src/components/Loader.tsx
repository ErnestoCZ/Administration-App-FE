import { Center, Flex, Spinner } from '@chakra-ui/react';
import styled from 'styled-components';
import { Label } from './Label';
const StyledSpinner = styled(Spinner)`
  color: ${(props) => props.theme.colors.secondary};
`;

export const Loader = () => {
  return (
    <Center width={'100%'} height={'50%'}>
      <Flex direction={'row'} alignItems={'center'} gap={'3'}>
        <StyledSpinner size={'xl'} />
        <Label colorScheme="secondary">Loading...</Label>
      </Flex>
    </Center>
  );
};
