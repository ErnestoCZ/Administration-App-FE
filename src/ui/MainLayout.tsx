import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { MainNavBar } from './MainNavBar.tsx';
import {
  Logo,
  StyledHeader,
  StyledHeaderTitle,
} from '../components/styles/Header.styled.ts';
import { FlexBox } from '../components/styles/Box.styled.ts';
import reactLogo from '../assets/react.svg';
export const MainLayout: FC = () => {
  return (
    <>
      <FlexBox $direction="column">
        <StyledHeader>
          <Logo src={reactLogo} alt={'logo'} $spinleft={false} />
          <StyledHeaderTitle>Administration App </StyledHeaderTitle>
          <Logo src={reactLogo} alt={'logo'} $spinleft={true} />
        </StyledHeader>

        <FlexBox>
          <MainNavBar />
        </FlexBox>
        <Outlet />
      </FlexBox>
    </>
  );
};
