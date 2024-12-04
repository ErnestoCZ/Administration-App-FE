import { FC, PropsWithChildren } from 'react';
import { Stack } from '@/components/Stack';

export const List: FC<PropsWithChildren> = ({ children }) => {
  return <Stack direction={'column'}>{children}</Stack>;
};
