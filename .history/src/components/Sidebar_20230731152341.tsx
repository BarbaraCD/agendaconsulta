import { ScheduleOutlined, UserOutlined } from '@ant-design/icons'
import { StyledSidebar, StyledList } from '../styles/SidebarStyled'

export function Sidebar(){
  return (
    <StyledSidebar>
        <StyledList>
          <li>
            <ScheduleOutlined style={color:green''} />
            <a href="/appointments">Agendamentos</a>
          </li>
          <li>
            <UserOutlined />
            <a href="/patients">Pacientes</a>
          </li>
          <li>
            <UserOutlined />
            <a href="/doctors">Médicos</a>
          </li>
        </StyledList>
    </StyledSidebar>
  )
}