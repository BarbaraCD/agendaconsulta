import { styled } from "styled-components"

export const StyledCalendar = styled.a`
  text-decoration: none;
  text-align: right;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors[100]};
  font-weight: 500;
`