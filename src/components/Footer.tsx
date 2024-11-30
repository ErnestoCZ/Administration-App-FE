import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: auto;
  border-radius: 10px;
  height: 5vh;
  justify-items: center;
  justify-self: flex-end;
  justify-content: flex-end;
`;
export const Footer: FC<PropsWithChildren> = ({ children }) => {
  return <StyledFooter> {children}</StyledFooter>;
};
