import { FC, PropsWithChildren, CSSProperties, ComponentProps } from "react"
import styled from "styled-components"

type BoxProps = ComponentProps<'div'> & CSSProperties;

const StyledBox = styled.div<BoxProps>`
  width: 100%;
  height: ${props => props.height || 'auto'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'none'};
  padding: 1vh;
  margin: ${props => props.margin};
  border: 1px solid black
`

export const Box : FC<PropsWithChildren<BoxProps>> = ({children, ...rest}) => {
  return (
    <StyledBox {...rest}>{children}</StyledBox>
  )
}
