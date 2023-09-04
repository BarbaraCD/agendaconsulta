import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { SidebarComponent } from './SidebarComponent'
import { Container } from '../styles/global'

const HeaderDisplay = styled.div`
  width: 100%;
  display: block;
`

const ContainerHeader = styled.div`
  padding: 12px 16px;
  width: 100%;
  min-width: 200px;
  font-weight: 700;
  overflow: visible;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
`

const StyleLink = styled(Link)`
  text-decoration: none;
  word-break: normal;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: start;
  color: ${(props) => props.theme.colors.white};
  gap: 10px;
`

export function Header() {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <HeaderDisplay>
      <ContainerHeader>
        <StyleLink to="/">
          <MenuOutlined onClick={toggleSidebar} />
          <p>Agenda consulta</p>
        </StyleLink>
      </ContainerHeader>
      <SidebarComponent collapsed={collapsed} />
    </HeaderDisplay>
  )
}
