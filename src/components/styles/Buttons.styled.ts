import { styled } from 'styled-components';

export type ButtonStyleProps = 'primary' | 'secondary' | 'edit' | 'delete';

export const StyledButton = styled.button<{ $buttonStyle?: ButtonStyleProps }>`
  background-color: ${(props) => {
    switch (props.$buttonStyle) {
      case 'primary':
        return '#05d9f5';
      case 'secondary':
        return '#05d485';
      case 'edit':
        return '#f5d905';
      case 'delete':
        return '#f50505';
    }
    return props.theme.colors.Button.primary.background;
  }};
  height: 35px;
  width: 80px;
  border-radius: 5px;
`;
