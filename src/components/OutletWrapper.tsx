import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

const StyledOutletWrapper = styled.div`
  background-color: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.primary}
  );
  padding: 0vh;
  margin: 0%;
  width: 100%;
  height: 100%;
`;

export const OutletWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <StyledOutletWrapper>{children}</StyledOutletWrapper>;
};
