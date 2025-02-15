import { FC, PropsWithChildren, CSSProperties } from 'react';
import styled from 'styled-components';
import { ComponentProps } from 'react';

type DivProps = ComponentProps<'div'> & CSSProperties;

const StyledStack = styled.div<DivProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  width: 100%;
  height: 100%;
`;

export const Stack: FC<PropsWithChildren<DivProps>> = ({children, ...rest }) => {
  return (
    <StyledStack {...rest}>
      {children}
    </StyledStack>
  );
};
