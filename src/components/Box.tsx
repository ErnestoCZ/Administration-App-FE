import { FC, PropsWithChildren, CSSProperties, ComponentProps } from 'react';
import styled from 'styled-components';

type BoxProps = ComponentProps<'div'> & CSSProperties;

const StyledBox = styled.div<BoxProps>`
  width: 100%;
  height: ${(props) => props.height || 'auto'};
  background-color: white;
  padding: 1vh;
  margin: 0;
  border: 1px solid black;
`;

export const Box: FC<PropsWithChildren<BoxProps>> = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};
