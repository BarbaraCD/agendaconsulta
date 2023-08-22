import { ScheduleOutlined, UserOutlined } from '@ant-design/icons'
import { StyledSidebar, StyledList } from '../styles/SidebarStyled'
import { Link } from 'react-router-dom'

export function Sidebar() {
  return (
    <StyledSidebar>
      <StyledList>
        <li>
          <ScheduleOutlined style={{ color: '#059669' }} />
          <Link to="/appointments/new">Marcar Consulta</Link>
        </li>
        <li>
          <UserOutlined style={{ color: '#059669' }} />
          <Link to="/patients/new">Cadastrar Pacientes</Link>
        </li>
        <li>
          <UserOutlined style={{ color: '#059669' }} />
          <Link to="/doctors/new">Cadastrar Médicos</Link>
        </li>
      </StyledList>
    </StyledSidebar>
  )
}
