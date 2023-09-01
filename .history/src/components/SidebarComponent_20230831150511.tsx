import { ScheduleOutlined, UserOutlined } from '@ant-design/icons'
import { StyledList, StyledItem, StyledSidebar } from '../styles/SidebarStyled'
import { Link } from 'react-router-dom'

export function SidebarComponent() {
  return (
    <StyledSidebar>
      <StyledList>
        <StyledItem component={<Link to="/appointments/calendar" />}>
          <ScheduleOutlined /> Consultas
        </StyledItem>
        <StyledItem>
          <UserOutlined />
          <Link to="/patients/list">Pacientes</Link>
        </StyledItem>
        <StyledItem>
          <UserOutlined />
          <Link to="/doctors/list">Médicos</Link>
        </StyledItem>
      </StyledList>
    </StyledSidebar>
  )
}
