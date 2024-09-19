import { FC } from 'react';
import {Outlet} from '@tanstack/react-router';
import { MainNavBar } from './MainNavBar.tsx';

export const MainLayout : FC = () => {
  return (
    <>
      <MainNavBar>
      </MainNavBar>
      <Outlet/>
    </>
  )
}
