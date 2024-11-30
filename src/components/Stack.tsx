import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

export type Direction = 'row' | 'column';

type StackProps = {
  direction?: Direction;
};

export const StyledStack = styled.div<{ $direction: Direction }>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  width: 100%;
  height: 100%;
`;

export const Stack: FC<PropsWithChildren<StackProps>> = ({
  direction,
  children,
}) => {
  return <StyledStack $direction={direction || 'row'}>{children}</StyledStack>;
};
