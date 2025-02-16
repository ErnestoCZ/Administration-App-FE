import { ComponentProps, CSSProperties, FC } from 'react';
import { styled } from 'styled-components';

type InputProps = ComponentProps<'input'> & CSSProperties

export const StyledInput = styled.input`
  border-radius: 10px;
  padding: 0.5rem;
  background-color: #e0e0e0;
  border: 1px solid;
  transition: 300ms;
  height: auto;
  max-height: 50px;
  width: ${(props) => props.width ? props.width : '100%'};

  &:hover {
    background-color: #f0f0f0;
    border-color: ${(props) => props.theme.colors.primary};
    transition: 300ms;
  }
`;


export const Input: FC<InputProps> = ({...rest}) => {
  return (
    <StyledInput
      {...rest}
    />
  );
};
