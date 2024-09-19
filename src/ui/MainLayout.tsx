import { FC } from 'react';
import {Outlet} from '@tanstack/react-router';
import { MainNavBar } from './MainNavBar.tsx';
import styled from 'styled-components';



const StyledMainLayout = styled.div`
margin: 0px;
min-width: 100%;
max-width: 100%;
min-height: 100%;
max-height: 100%;
`

export const MainLayout : FC = () => {
  return (
    <>
    <StyledMainLayout>
      <MainNavBar/>
      <Outlet/>
    </StyledMainLayout>
    </>
  )
}
