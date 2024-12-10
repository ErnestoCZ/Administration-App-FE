import { FC } from 'react';
import { styled } from 'styled-components';

export const StyledInput = styled.input`
  border-radius: 10px;
  padding: 0.5rem;
  background-color: #e0e0e0;
  border: 1px solid;
  transition: 300ms;
  height: auto;
  max-height: 50px;

  &:hover {
    background-color: #f0f0f0;
    border-color: ${(props) => props.theme.colors.primary};
    transition: 300ms;
  }
`;

interface InputProps {
  id?: string;
  type?: 'text' | 'password' | 'email' | 'date';
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <StyledInput
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
