import { FC } from 'react';
import { styled } from 'styled-components';

export const StyledInput = styled.input`
  border-radius: 10px;
  padding: 0.5rem;
  background-color: #f0f0f0;
`;
export const Input: FC = () => {
  return <StyledInput />;
};
