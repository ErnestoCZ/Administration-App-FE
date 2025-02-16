import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

type SeparatorProps = {
    direction: 'vertical' | 'horizontal'
}

//TODO insert distinction between vertical and horizontal orientation : width, height, color
const StyledSeparator = styled.div<SeparatorProps>`
    background-color: grey;
`
export const Separator : FC<PropsWithChildren<SeparatorProps>> = ({...rest}) => {
  return (
    <StyledSeparator {...rest}></StyledSeparator>
  )
}
