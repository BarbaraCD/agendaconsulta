
import { styled } from "styled-components"

export const StyledAppointments = styled.div``

export const APBody = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
`

export const StyledA = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors[100]};
  font-weight: 500;
  margin: 12px;
`

export const ApFooter = styled.div`
  margin: 20px 0;
`