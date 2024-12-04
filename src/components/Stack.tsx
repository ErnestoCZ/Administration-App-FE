import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

type Direction = 'row' | 'column';
type JustifyContent = 'center' | 'flex-start' | 'flex-end' | 'space-between';
type JustifyItems = 'center' | 'flex-start' | 'flex-end';
type JustifySelf = 'center' | 'flex-start' | 'flex-end';
type AlignContent = 'center' | 'flex-start' | 'flex-end';
type AlignItems = 'center' | 'flex-start' | 'flex-end';
type AlignSelf = 'center' | 'flex-start' | 'flex-end';
type flex = string;
type Wrap = 'wrap' | 'nowrap';

type StackProps = {
  direction?: Direction;
  justyfyContent?: JustifyContent;
  justifyItems?: JustifyItems;
  justifySelf?: JustifySelf;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  wrap?: Wrap;
  gap?: string;
  flex?: string;
  height?: string;
};

export const StyledStack = styled.div<{
  $direction: Direction;
  $justifyContent?: JustifyContent;
  $justifyItems?: JustifyItems;
  $justifySelf?: JustifySelf;
  $alignContent?: AlignContent;
  $alignItems?: AlignItems;
  $alignSelf?: AlignSelf;
  $flex?: flex;
  $height?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  justify-content: ${(props) => props.$justifyContent || 'flex-start'};
  justify-items: ${(props) => props.$justifyItems || 'flex-start'};
  justify-self: ${(props) => props.$justifySelf || 'flex-start'};
  align-content: ${(props) => props.$alignContent || 'flex-start'};
  align-items: ${(props) => props.$alignItems || 'flex-start'};
  align-self: ${(props) => props.$alignSelf || 'flex-start'};
  width: ${(props) => props.$height || '100%'};
  height: ${(props) => props.$height || '100%'};
  flex: ${(props) => props.$flex || '1'};
`;

export const Stack: FC<PropsWithChildren<StackProps>> = ({
  direction,
  children,
  height,
  ...rest
}) => {
  return (
    <StyledStack
      $height={height}
      $direction={direction || 'row'}
      $alignItems={rest.alignItems}
      $alignContent={rest.alignContent}
      $alignSelf={rest.alignSelf}
      $flex={rest.flex}
      $justifyContent={rest.justyfyContent}
      $justifyItems={rest.justifyItems}
      $justifySelf={rest.justifySelf}
    >
      {children}
    </StyledStack>
  );
};
