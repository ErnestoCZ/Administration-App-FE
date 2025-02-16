import { FC, PropsWithChildren, CSSProperties, ComponentProps } from "react"
import styled from "styled-components"

type BoxProps = ComponentProps<'div'> & CSSProperties;

const StyledBox = styled.div<BoxProps>`
  width: 100%;
  height: 100%;
  background-color: cadetblue;
  padding: 1vh;
  border-radius: 10px;
  margin: ${props => props.margin}
`

export const Box : FC<PropsWithChildren<BoxProps>> = ({children, ...rest}) => {
  return (
    <StyledBox {...rest}>{children}</StyledBox>
  )
}
