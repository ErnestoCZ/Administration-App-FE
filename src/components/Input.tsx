import { FC } from 'react';
import { styled } from 'styled-components';

export const StyledInput = styled.input`
  border-radius: 10px;
  padding: 0.5rem;
  background-color: #f0f0f0;
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
