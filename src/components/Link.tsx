import { LinkProps, Link as TanStackLink } from '@tanstack/react-router';
import { styled } from 'styled-components';
import { FC, PropsWithChildren } from 'react';

export const StyledLink = styled(TanStackLink)`
  color: #000;
  text-decoration: none;

  &:hover {
    color: white;
    transition: 300ms;
  }
`;

export const Link: FC<PropsWithChildren<LinkProps>> = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
