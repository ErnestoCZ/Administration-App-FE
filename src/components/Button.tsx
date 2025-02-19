import { FC , PropsWithChildren} from 'react';
import styled from 'styled-components';
import {Button as AriaButton , ButtonProps} from 'react-aria-components'

export const StyledButton = styled(AriaButton)<ButtonProps>`
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
