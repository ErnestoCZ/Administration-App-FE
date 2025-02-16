import { styled } from 'styled-components';
import { FC } from 'react';
import { Link } from '@/components/Link';

export const StyledMainNavBar = styled.div`
  display: flex;
  flex-direction: row;
  background: none;
  border-radius: 0px;
  margin: 0px;
  padding: 10px;
  min-width: 100%;
`;
//TODO : Add a styled component for the NavBarBox
const StyledNavBarBox = styled.div`
  opacity: 100%;
  padding: 10px;
  margin-left: 5px;
  border-radius: 5px;
  height: 40px;
  color: ${props => props.theme.colors.secondary};
`;

export const MainNavBar: FC = () => {
  return (
    <>
      <StyledMainNavBar>
        <StyledNavBarBox>
          <Link to="/control">Control</Link>
        </StyledNavBarBox>

        <StyledNavBarBox>
          <Link to="/billings">Billings</Link>
        </StyledNavBarBox>

        <StyledNavBarBox style={{ marginLeft: 'auto' }}>Logged in as User</StyledNavBarBox>
      </StyledMainNavBar>
    </>
  );
};
