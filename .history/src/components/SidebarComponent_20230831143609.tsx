import { Sidebar, MenuItem } from 'react-pro-sidebar'
import { ScheduleOutlined, UserOutlined } from '@ant-design/icons'
import { StyledSidebar, StyledList, StyledItem } from '../styles/SidebarStyled'
import { Link } from 'react-router-dom'

export function SidebarComponent() {
  return (
    <Sidebar>
      <StyledList>
        <MenuItem>
          <ScheduleOutlined />
          <Link to="/appointments/calendar">Consultas</Link>
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
    </Sidebar>
  )
}
