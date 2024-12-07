import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface FlexProps {
  direction?: 'row' | 'column';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  justifyItems?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between';
  justifySelf?: 'center' | 'flex-start' | 'flex-end';
  alignContent?: 'center' | 'flex-start' | 'flex-end';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
}

const StyledFlex = styled.div<{ $props: FlexProps }>`
  display: flex;
  flex-direction: ${({ $props }) => $props.direction || 'row'};
`;

export const Flex: FC<PropsWithChildren<FlexProps>> = ({
  children,
  ...rest
}) => {
  return <StyledFlex $props={rest}>{children}</StyledFlex>;
};
