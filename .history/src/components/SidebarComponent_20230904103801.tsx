import { ScheduleOutlined, UserOutlined } from '@ant-design/icons'
import { StyledList, StyledItem, StyledSidebar } from '../styles/SidebarStyled'
import { Link } from 'react-router-dom'

interface SidebarProps {
  collapsed: boolean
}

export function SidebarComponent({ collapsed }: SidebarProps) {
  return (
    <StyledSidebar collapsed={collapsed}>
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
