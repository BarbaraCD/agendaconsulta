import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerHeader = styled.div`
  padding: 12px 16px;
  width: 100%;
  min-width: 200px;
  font-weight: 700;
  overflow: visible;
  background-color: ${(props) => props.theme.colors.primary};
`

export const StyleLink = styled(Link)`
  text-decoration: none;
  word-break: normal;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: start;
  color: ${(props) => props.theme.colors.white};
  gap: 10px;
`

export const StyledSidebar = styled(Sidebar)`
  font-size: ${(props) => props.theme.size.xl};
  font-weight: 500;
  overflow: hidden;

  button {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.sbcolor};
    border: none;
  }

  width: ${({ collapsed }) => (collapsed ? '60px' : '200px')};
  transition: width 0.3s ease;
`

export const StyledList = styled(Menu)`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.sbcolor};
  height: 93vh;
  min-height: 100%;
`

export const StyledItem = styled(MenuItem)`
  cursor: pointer;
  border: ${(props) => props.theme.colors.sbcolor};
  background-color: ${(props) => props.theme.colors.sbcolor};
  line-height: 1.3rem;
  color: ${(props) => props.theme.colors.primary};
`
