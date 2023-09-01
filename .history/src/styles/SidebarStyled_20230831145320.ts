import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import styled from 'styled-components'

export const StyledSidebar = styled(Sidebar)``

export const StyledList = styled(Menu)`
  list-style: none;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.sbcolor};
  height: 93.5vh;
  min-height: 100%;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    margin: 0.5rem;
    word-break: break-all;
    background-color: ${(props) => props.theme.colors.sbcolor};
  }
`

export const StyledItem = styled(MenuItem)`
  cursor: pointer;

  line-height: 1.3rem;
  color: ${(props) => props.theme.colors.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.sbcolor};
  }
`
