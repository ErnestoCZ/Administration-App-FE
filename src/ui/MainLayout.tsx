import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { MainNavBar } from './MainNavBar.tsx';
import { Grid, GridItem } from '@chakra-ui/react';


export const MainLayout : FC = () => {
  return (
    <>
    {/* <StyledMainLayout>
      <MainNavBar/>
      <Outlet/>
      <Spacer />
      <footer>Footer</footer>
    </StyledMainLayout> */}
    <Grid templateAreas={`"nav nav" "main main" "footer footer"`} 
    gridTemplateRows={`1fr 20fr 1fr`}
    gridTemplateColumns={`1fr 1fr`}
    h={'100vh'}
    gap={1}
    >
      <GridItem area={'nav'} >
        <MainNavBar/>
      </GridItem> 
      <GridItem area={'main'} >
        <Outlet/>
      </GridItem> 
      <GridItem area={'footer'} >
        <div >Footer</div>
      </GridItem> 

    </Grid>

    </>
  )
}
