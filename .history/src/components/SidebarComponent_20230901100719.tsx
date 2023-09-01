import {
  HomeOutlined,
  MenuOutlined,
  ScheduleOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  StyledList,
  StyledItem,
  StyledSidebar,
  ContainerHeader,
  StyleLink,
} from '../styles/SidebarStyled'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function SidebarComponent() {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <StyledSidebar collapsed={collapsed}>
        <ContainerHeader>
          <StyleLink to="/">
            <HomeOutlined />
            <p>Agenda consulta</p>
          </StyleLink>
        </ContainerHeader>
        <StyledList>
          <StyledItem>
            <button onClick={toggleSidebar}>
              <MenuOutlined />
            </button>
          </StyledItem>
          <StyledItem component={<Link to="/appointments/calendar" />}>
            <ScheduleOutlined /> Consultas
          </StyledItem>
          <StyledItem component={<Link to="/patients/list" />}>
            <UserOutlined /> Pacientes
          </StyledItem>
          <StyledItem component={<Link to="/doctors/list" />}>
            <UserOutlined /> Médicos
          </StyledItem>
        </StyledList>
      </StyledSidebar>
    </>
  )
}
