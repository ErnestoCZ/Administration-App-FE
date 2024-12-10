import React, { FC } from 'react';
import styled from 'styled-components';

export type ButtonStyleProps = 'primary' | 'secondary' | 'edit' | 'delete';

export const StyledButton = styled.button<{ $buttonStyle?: ButtonStyleProps }>`
  background-color: ${(props) => {
    switch (props.$buttonStyle) {
      case 'primary':
        return props.theme.colors.Button.primary.background;
      case 'secondary':
        return props.theme.colors.Button.secondary.background;
      case 'edit':
        return props.theme.colors.Button.edit.background;
      case 'delete':
        return props.theme.colors.delete.background;
    }
    return props.theme.colors.Button.primary.background;
  }};

  color: ${(props) => {
    switch (props.$buttonStyle) {
      case 'primary':
        return props.theme.colors.Button.primary.color;
      case 'secondary':
        return props.theme.colors.Button.secondary.color;
      case 'edit':
        return props.theme.colors.Button.edit.color;
      case 'delete':
        return props.theme.colors.delete.color;
    }
    return props.theme.colors.Button.primary.color;
  }};

  height: 45px;
  width: auto;
  margin: 0px;
  padding: 1vh;
  border-radius: 5px;
  font-family: Parkinsans 300;
  font-size: 14px;
  justify-content: center;
  align-content: center;
`;

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
  style?: ButtonStyleProps;
}

export const Button: FC<ButtonProps> = ({ type, children, style, onClick }) => {
  return (
    <StyledButton
      type={type}
      $buttonStyle={style || 'primary'}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
