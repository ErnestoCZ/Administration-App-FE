import { styled } from 'styled-components';
import { FC } from 'react';
import { Link } from '@tanstack/react-router';

const StyledMainNavBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #05d9f5;
  border-radius: 3px;
  margin: 0px;
  padding: 10px;
  min-width: 100%;
`;

const StyledNavBarBox = styled.div`
  background-color: #05d9f5;
  padding: 10px;
  margin-left: 5px;
  border-radius: 5px;
`;

export const MainNavBar: FC = () => {
  return (
    <>
      <StyledMainNavBar>
        <StyledNavBarBox>
          <Link to="/"></Link>
        </StyledNavBarBox>
        <StyledNavBarBox>
          <Link to="/user">User</Link>
        </StyledNavBarBox>

        <StyledNavBarBox>
          <Link to="/billings">Billings</Link>
        </StyledNavBarBox>

        <StyledNavBarBox>
          <Link to="/about">about</Link>
        </StyledNavBarBox>

        <StyledNavBarBox>User</StyledNavBarBox>
      </StyledMainNavBar>
    </>
  );
};
