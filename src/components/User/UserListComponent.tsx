import { FC, PropsWithChildren } from 'react';
import { FlexBox } from '../styles/Box.styled';

export const List: FC<PropsWithChildren> = ({ children }) => {
  return <FlexBox $direction={'column'}>{children}</FlexBox>;
};
