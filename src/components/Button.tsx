import React, { FC } from 'react';
import { ButtonStyleProps, StyledButton } from './styles/Buttons.styled';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
  style?: ButtonStyleProps;
}

export const Button: FC<ButtonProps> = ({ type, children, style, onClick }) => {
  return (
    <StyledButton type={type} $buttonStyle={style} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
