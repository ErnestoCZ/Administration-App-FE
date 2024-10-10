import {styled} from 'styled-components';
import { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { Box, Divider, Spacer } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const StyledMainNavBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #05d9f5;
  border-radius: 3px;
  margin: 0px;
  padding: 10px;
  min-width: 
  100%;
  `

const StyledNavBarBox = styled(Box)`
  background-color: #05d9f5;
  padding: 10px;
  margin-left: 5px;
  border-radius: 5px;
  `


export const MainNavBar: FC = () => {
  return (
    <>

      <StyledMainNavBar>


        <StyledNavBarBox>
          <Link to="/">
            <ArrowBackIcon/>
          </Link>
          </StyledNavBarBox>
        <StyledNavBarBox>
          <Link to="/user">User</Link>
        </StyledNavBarBox>

        <StyledNavBarBox>
          <Link to="/billings">Billings</Link>
        </StyledNavBarBox>

        <Divider orientation="vertical" />
        
        <StyledNavBarBox>
          <Link to="/about">about</Link>
        </StyledNavBarBox>


        <Spacer/>

        <StyledNavBarBox>
        User
        </StyledNavBarBox>
      </StyledMainNavBar>
      
    </>
  )
}
