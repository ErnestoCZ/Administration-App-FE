import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

type htmlFor = string;
type colorScheme = 'primary' | 'secondary';
type width = string;
export const StyledLabel = styled.label<{
  $htmlFor?: htmlFor;
  $colorScheme?: colorScheme;
  $width?: width;
}>`
  font-weight: bold;
  font-size: 1.2rem;
  width: ${(props) => props.$width};
  color: ${(props) => {
    switch (props.$colorScheme) {
      case 'primary':
        return props.theme.colors.primary;
      case 'secondary':
        return props.theme.colors.secondary;
    }
    return props.theme.colors.primary;
  }};
`;

interface LabelProps {
  children: React.ReactNode;
  colorScheme?: colorScheme;
  htmlFor?: string;
  width?: string;
}

export const Label: FC<PropsWithChildren<LabelProps>> = ({
  children,
  htmlFor,
  colorScheme,
  width,
}) => {
  return (
    <StyledLabel $colorScheme={colorScheme} $htmlFor={htmlFor} $width={width}>
      {children}
    </StyledLabel>
  );
};
