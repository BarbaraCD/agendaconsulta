
import { styled } from "styled-components"

export const StyledAppointments = styled.div`

  h3{
    color: ${(props) => props.theme.colors.primary};
    size: ${(props) => props.theme.size.xl};
  }
`

export const APBody = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const StyledA = styled.a`
  
`

export const ApFooter = styled.div`
 align-items: center;
 justify-content: space-between;
  /* margin: 20px 0; */
`