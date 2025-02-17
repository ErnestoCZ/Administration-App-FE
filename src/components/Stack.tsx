import { FC, PropsWithChildren, CSSProperties } from 'react';
import styled from 'styled-components';
import { ComponentProps } from 'react';

type DivProps = ComponentProps<'div'> & CSSProperties;

const StyledStack = styled.div<DivProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
  justify-content: ${props => props.justifyContent};
  justify-items: ${props => props.justifyItems};
  justify-self: ${props => props.justifySelf};
  align-content: ${props => props.alignContent};
  align-items: ${props => props.alignItems};
  align-self: ${props => props.alignSelf};
  width: 100%;
  height: 100%;
`;

export const Stack: FC<PropsWithChildren<DivProps>> = ({children, flexDirection, ...rest }) => {
  return (
    <StyledStack {...rest} flexDirection={flexDirection}>
      {children}
    </StyledStack>
  );
};
