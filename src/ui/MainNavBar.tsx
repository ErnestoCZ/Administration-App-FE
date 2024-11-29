import { styled } from 'styled-components';
import { FC } from 'react';
import { Link } from '@/components/Link';
import { StyledMainNavBar } from '@/components/styles/MainNavBar.styled';

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

        <StyledNavBarBox style={{ marginLeft: 'auto' }}>User</StyledNavBarBox>
      </StyledMainNavBar>
    </>
  );
};
