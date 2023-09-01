import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyleLink = styled(Link)`
  text-decoration: none;
  word-break: keep-all;
  padding: 0 0.2rem;
  align-items: center;
  justify-content: start;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.size.lg};
  gap: 10px;
`

export const StyledSidebar = styled(Sidebar)`
  font-size: ${(props) => props.theme.size.lg};
  font-weight: 500;
  overflow: hidden;

  width: ${({ collapsed }) => (collapsed ? '70px' : '200px')};
  transition: width 0.1s ease;
`

export const StyledList = styled(Menu)`
  background-color: ${(props) => props.theme.colors.sbcolor};
  height: 93.5vh;
  min-height: 100px;

  button {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.sbcolor};
  }
`

export const StyledItem = styled(MenuItem)`
  cursor: pointer;
  border: ${(props) => props.theme.colors.sbcolor};
  background-color: ${(props) => props.theme.colors.sbcolor};
  line-height: 1.3rem;
  color: ${(props) => props.theme.colors.primary};
`
