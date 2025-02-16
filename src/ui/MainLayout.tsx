import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { MainNavBar } from './MainNavBar.tsx';
import reactLogo from '../assets/react.svg';
import { Stack } from '@/components/Stack.tsx';
import { Header } from '@/components/Header.tsx';
import { Logo } from '@/components/Logo.tsx';
import { HeaderTitle } from '@/components/HeaderTitle.tsx';
import styled from 'styled-components';


const StyledMainLayoutWrapper = styled.div`
  background-color: orange;
  height: 100rem;
`

const StyledOutletWrapper = styled.div`
  padding: 1vh;
  width: 100%;
  height: 70%;
`

export const MainLayout: FC = () => {
  return (
    <>
    <StyledMainLayoutWrapper>

      <Stack flexDirection='column'>
        <Header>
          <Logo src={reactLogo} alt={'logo'} spinleft={false} />
          <HeaderTitle title={'Administration App'} />
          <Logo src={reactLogo} alt={'logo'} spinleft={true} />
        </Header>
          <MainNavBar />

        <StyledOutletWrapper>
          <Outlet />
        </StyledOutletWrapper>
        {/* <Footer>Footer</Footer> */}
      </Stack>




    </StyledMainLayoutWrapper>
    </>
  );
};
