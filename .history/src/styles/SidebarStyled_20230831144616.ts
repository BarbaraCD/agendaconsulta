import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import styled from 'styled-components'

export const StyledSidebar = styled(Sidebar)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.sbcolor};
  font-size: ${(props) => props.theme.size.lg};
  font-weight: 500;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;

  &:hover {
    background-color: ${(props) => props.theme.colors.sbcolor};
  }
`

export const StyledList = styled(Menu)`
  list-style: none;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.sbcolor};
  height: 93.5vh;
  min-height: 100%;
  &:hover {
    background-color: ${(props) => props.theme.colors.sbcolor};
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    margin: 0.5rem;
    word-break: break-all;
  }
`

export const StyledItem = styled(MenuItem)`
  cursor: pointer;
  padding: 1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme.colors.primary};
`
