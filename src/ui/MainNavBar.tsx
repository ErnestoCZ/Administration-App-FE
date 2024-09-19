import { PropsWithChildren ,FC} from 'react';

export const MainNavBar: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <div>{children}</div>
    </>
  )
}
