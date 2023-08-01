import { styled } from "styled-components"

export const StyledCalendar = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors[100]};
  justify-content: end;
  font-weight: 500;
`