import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import styled from 'styled-components'

export const StyledSidebar = styled(Sidebar)`
  font-size: ${(props) => props.theme.size.xl};
  font-weight: 500;
  overflow: auto;
`

export const StyledList = styled(Menu)`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.sbcolor};
  height: 93.5vh;
  min-height: 100%;
`

export const StyledItem = styled(MenuItem)`
  cursor: pointer;
  border: ${(props) => props.theme.colors.sbcolor};
  background-color: ${(props) => props.theme.colors.sbcolor};
  line-height: 1.3rem;
  color: ${(props) => props.theme.colors.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.head};
  }
`
