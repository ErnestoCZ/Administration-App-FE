import { LinkProps } from '@tanstack/react-router';
import { FC, PropsWithChildren } from 'react';
import StyledLink from './styles/Link.styled';

export const Link: FC<PropsWithChildren<LinkProps>> = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
