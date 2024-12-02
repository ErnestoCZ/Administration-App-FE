import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { MainNavBar } from './MainNavBar.tsx';
import reactLogo from '../assets/react.svg';
import { Footer } from '@/components/Footer.tsx';
import { Stack } from '@/components/Stack.tsx';
import { Header } from '@/components/Header.tsx';
import { Logo } from '@/components/Logo.tsx';
import { HeaderTitle } from '@/components/HeaderTitle.tsx';
import { OutletWrapper } from '@/components/OutletWrapper.tsx';

export const MainLayout: FC = () => {
  return (
    <>
      <Stack direction={'column'}>
        <Header>
          <Logo src={reactLogo} alt={'logo'} spinleft={false} />
          <HeaderTitle title={'Administration App'} />
          <Logo src={reactLogo} alt={'logo'} spinleft={true} />
        </Header>

        <MainNavBar />
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
        <Footer></Footer>
      </Stack>
    </>
  );
};
