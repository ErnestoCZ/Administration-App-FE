import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { MainNavBar } from './MainNavBar.tsx';
import { Box, Center, Flex, Spacer } from '@chakra-ui/react';
import styled from 'styled-components';

const StyledHeader = styled(Box)`
  background-color: #05d9f5;
  margin: 0px;
  `


export const MainLayout : FC = () => {
  return (
    <>

      <Flex direction={'column'} height={'100vh'} minHeight={'700px'} margin={0}>

      <StyledHeader>
        <Center >
        Header
        </Center>

      </StyledHeader>

      <Box>
        <MainNavBar/>
      </Box>

      <Box>
        <Outlet/>
      </Box>

      <Spacer/>

      <Box bg={'red'}>
        Footer
        </Box>

      </Flex>
    </>
  )
}
