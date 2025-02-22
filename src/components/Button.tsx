import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Button as AriaButton, ButtonProps } from 'react-aria-components';

export const StyledButton = styled(AriaButton)<ButtonProps>`
  height: auto;
  width: auto;
  margin: 0px;
  padding: 10px;
  border-radius: 5px;
  justify-content: center;
  align-content: center;
  background-color: white;
`;

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...rest
}) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
