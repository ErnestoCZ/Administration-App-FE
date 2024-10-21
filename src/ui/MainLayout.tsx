import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { MainNavBar } from './MainNavBar.tsx';
import { Box, Center, Flex, Spacer } from '@chakra-ui/react';
import { StyledHeader } from '../components/styles/Header.styled.ts';
import { OutletWrapper } from '../components/styles/Box.styled.ts';


export const MainLayout : FC = () => {
  return (
    <>
      <Flex direction={'column'} height={'100vh'} minHeight={'700px'} minWidth={'1000px'} margin={0}>

      <StyledHeader>
        <Center >
        Header
        </Center>
      </StyledHeader>

      <Box>
        <MainNavBar/>
      </Box>
      <OutletWrapper>
        <Outlet/>
      </OutletWrapper>
      <Spacer></Spacer>
      <Box bg={'primary'} height={'5vh'} display={'flex'} justifyContent={'center'} >
        Footer
        </Box>
      </Flex>
    </>
  )
}
