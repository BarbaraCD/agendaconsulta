import { styled } from "styled-components"

export const StyledA = styled.a`
  text-decoration: none;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors[100]};
  font-weight: 500;
`