import { Link as TanStackLink } from '@tanstack/react-router';
import { styled } from 'styled-components';
import { FC, PropsWithChildren } from 'react';
import { LinkProps } from '@chakra-ui/react';

export const StyledLink = styled(TanStackLink)`
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

interface CustomLinkProps extends LinkProps {
  to: string;
  params?: Record<string, string>;
}

export const Link: FC<PropsWithChildren<CustomLinkProps>> = ({
  children,
  ...rest
}) => {
  return <StyledLink {...rest}>{children}</StyledLink>;
};
