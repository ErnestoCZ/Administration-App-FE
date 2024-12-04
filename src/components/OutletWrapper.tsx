import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

const StyledOutletWrapper = styled.div`
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.primary},
    #ffffff
  );
  padding: 1vh;

  width: 100%;
  height: 100%;
`;

export const OutletWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <StyledOutletWrapper>{children}</StyledOutletWrapper>;
};
