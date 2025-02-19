import { Link as TanStackLink, LinkProps } from '@tanstack/react-router';
import { styled } from 'styled-components';
import { FC, PropsWithChildren } from 'react';

export const StyledLink = styled(TanStackLink)<LinkProps>`
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-content: center;

  &:hover {
    color: white;
    transition: 300ms;
  }
`;

export const Link: FC<PropsWithChildren<LinkProps>> = ({
  children,
  ...rest
}) => {
  return <StyledLink {...rest}>{children}</StyledLink>;
};
