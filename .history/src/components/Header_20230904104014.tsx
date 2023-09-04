import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { useState } from 'react'
import { SidebarComponent } from './SidebarComponent'
import { MenuOutlined } from '@ant-design/icons'

const HeaderDisplay = styled.div`
  display: grid;
`
const ContainerHeader = styled.div`
  padding: 12px 16px;
  width: 100%;
  min-width: 200px;
  font-weight: 700;
  overflow: visible;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
`

const StyleLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  word-break: normal;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: start;

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
        <MenuOutlined onClick={toggleSidebar} />
        {collapsed && <SidebarComponent collapsed={!!setCollapsed} />}
        <StyleLink to="/">
          <p>Agenda consulta</p>
        </StyleLink>
      </ContainerHeader>
    </HeaderDisplay>
  )
}
