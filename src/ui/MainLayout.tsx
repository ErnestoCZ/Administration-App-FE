import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { MainNavBar } from './MainNavBar.tsx';
import { Logo, StyledHeaderTitle } from '../components/styles/Header.styled.ts';
import reactLogo from '../assets/react.svg';
import { User } from '@/models/types.ts';
import { UserContext } from '@/Context/useUserContext.ts';
import { Footer } from '@/components/Footer.tsx';
import { Stack } from '@/components/Stack.tsx';
import { Header } from '@/components/Header.tsx';

export const MainLayout: FC = () => {
  return (
    <>
      <UserContext.Provider
        value={
          {
            id: '',
            firstName: 'Ernesto',
            lastName: 'Czechowski',
            email: '',
          } as User
        }
      >
        <Stack direction={'column'}>
          <Header>
            <Logo src={reactLogo} alt={'logo'} $spinleft={false} />
            <StyledHeaderTitle>Administration App </StyledHeaderTitle>
            <Logo src={reactLogo} alt={'logo'} $spinleft={true} />
          </Header>

          <MainNavBar />
          <Outlet />
          <Footer></Footer>
        </Stack>
      </UserContext.Provider>
    </>
  );
};
