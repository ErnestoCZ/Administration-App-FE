import { FC , PropsWithChildren} from "react"
import styled from "styled-components"
import { Box } from "@chakra-ui/react"

const StyledUserList = styled(Box)`
  display: flex;
  flex-direction: column;
  `

export const UserList : FC<PropsWithChildren> = ({children}) => {

  return (
    <StyledUserList>
        {children}
    </StyledUserList>
  )
}
