import { styled } from 'styled-components';
import { FC } from 'react';
import { Link } from '@/components/Link';
import { useUserContext } from '@/Context/useUserContext';

export const StyledMainNavBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #05d9f5;
  border-radius: 3px;
  margin: 0px;
  padding: 10px;
  min-width: 100%;
`;
//TODO : Add a styled component for the NavBarBox
const StyledNavBarBox = styled.div`
  background-color: #05d9f5;
  padding: 10px;
  margin-left: 5px;
  border-radius: 5px;
  height: 40px;
`;

export const MainNavBar: FC = () => {
  const { firstName, lastName } = useUserContext();

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

        <StyledNavBarBox
          style={{ marginLeft: 'auto' }}
        >{`Logged in as ${firstName}, ${lastName}`}</StyledNavBarBox>
      </StyledMainNavBar>
    </>
  );
};
