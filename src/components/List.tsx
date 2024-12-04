import { FC, memo, PropsWithChildren } from 'react';
import { Stack } from '@/components/Stack';

const List: FC<PropsWithChildren> = ({ children }) => {
  return <Stack direction={'column'}>{children}</Stack>;
};

export default memo(List);
