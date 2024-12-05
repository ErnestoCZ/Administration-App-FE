import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

type htmlFor = string;
type colorScheme = 'primary' | 'secondary';

export const StyledLabel = styled.label<{
  $htmlFor?: htmlFor;
  $colorScheme?: colorScheme;
}>`
  font-weight: bold;
  font-size: 1.2rem;
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
}

export const Label: FC<PropsWithChildren<LabelProps>> = ({
  children,
  htmlFor,
  colorScheme,
}) => {
  return (
    <StyledLabel $colorScheme={colorScheme} $htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
};
