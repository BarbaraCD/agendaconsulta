import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import styled from 'styled-components'

export const StyledSidebar = styled(Sidebar)`
  font-size: ${(props) => props.theme.size.xl};
  font-weight: 500;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

export const StyledList = styled(Menu)`
  background-color: ${(props) => props.theme.colors.sbcolor};
  height: 93.5vh;
  min-height: 100%;
`

export const StyledItem = styled(MenuItem)`
  cursor: pointer;
  padding: 0 12px;

  background-color: ${(props) => props.theme.colors.sbcolor};
  line-height: 1.3rem;
  color: ${(props) => props.theme.colors.primary};

  button {
    border: none;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.sbcolor};
    font-size: ${(props) => props.theme.size.xl};
  }
`
