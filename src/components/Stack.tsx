import { FC, PropsWithChildren } from 'react';
import { FlexBox } from './styles/Box.styled';

interface StackProps {
  direction?: 'row' | 'column';
}

export const Stack: FC<PropsWithChildren<StackProps>> = ({
  direction,
  children,
}) => {
  return <FlexBox $direction={direction}>{children}</FlexBox>;
};
