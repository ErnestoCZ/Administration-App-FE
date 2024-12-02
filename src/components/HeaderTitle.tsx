import { FC } from 'react';
import { styled } from 'styled-components';

export const StyledHeaderTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  transition: transform(-10px);
`;

interface HeaderTitleProps {
  title: string;
}

export const HeaderTitle: FC<HeaderTitleProps> = ({ title }) => {
  return <StyledHeaderTitle>{title}</StyledHeaderTitle>;
};
