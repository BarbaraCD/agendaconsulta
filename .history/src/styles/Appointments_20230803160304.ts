
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
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors[100]};
  font-weight: 500;
  padding: 8px 0;
  margin: 12px;
`

export const ApFooter = styled.div`
  margin: 20px 0;
`