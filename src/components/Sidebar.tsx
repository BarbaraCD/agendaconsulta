import { ScheduleOutlined, UserOutlined } from '@ant-design/icons'
import { StyledSidebar, StyledList } from '../styles/SidebarStyled'
import { Link } from 'react-router-dom'

export function Sidebar() {
  return (
    <StyledSidebar>
      <StyledList>
        <li>
          <ScheduleOutlined style={{ color: '#059669' }} />
          <Link to="/appointments/calendar">Consultas</Link>
        </li>
        <li>
          <UserOutlined style={{ color: '#059669' }} />
          <Link to="/patients/list">Pacientes</Link>
        </li>
        <li>
          <UserOutlined style={{ color: '#059669' }} />
          <Link to="/doctors/list">Médicos</Link>
        </li>
      </StyledList>
    </StyledSidebar>
  )
}
