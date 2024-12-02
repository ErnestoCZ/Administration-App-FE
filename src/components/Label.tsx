import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

type htmlFor = string;

export const StyledLabel = styled.label<{ $htmlFor: htmlFor }>`
  font-weight: bold;
  font-size: 1.2rem;
  color: #000;
`;

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

export const Label: FC<PropsWithChildren<LabelProps>> = ({
  children,
  htmlFor,
}) => {
  return <StyledLabel $htmlFor={`${htmlFor}`}>{children}</StyledLabel>;
};
