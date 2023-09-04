import {
  MenuOutlined,
  MessageOutlined,
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
    <StyledSidebar collapsed={collapsed}>
      <ContainerHeader>
        <button onClick={toggleSidebar}>
          <MessageOutlined style={{ fontSize: '16px' }} />
        </button>
        <StyleLink to="/">
          <p>Agenda consulta</p>
        </StyleLink>
      </ContainerHeader>
      <StyledList>
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
  )
}