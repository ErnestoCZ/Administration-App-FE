import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

export const StyledHeader = styled.div`
  background: linear-gradient(to Bottom, #fff, #05d9f5);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 10vh;
  margin: 0px;
  width: 100%;
  font-family: Parkisans;
  font-size: 24px;
  font-weight: 800;
  color: grey;
`;

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
