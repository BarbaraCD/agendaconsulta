import { styled } from "styled-components"

export const StyledAppointments = styled.div``

export const StyledA = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors[100]};
  font-weight: 500;
  gap: 20;
`