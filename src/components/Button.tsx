import { FC , ComponentProps, CSSProperties, PropsWithChildren} from 'react';
import styled from 'styled-components';

type ButtonProps = ComponentProps<'button'> & CSSProperties;

export const StyledButton = styled.button<ButtonProps>`
  height: auto;
  width: auto;
  margin: 0px;
  padding: 10px;
  border-radius: 5px;
  justify-content: center;
  align-content: center;
`;


export const Button: FC<PropsWithChildren<ButtonProps>> = ({children}) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
};
