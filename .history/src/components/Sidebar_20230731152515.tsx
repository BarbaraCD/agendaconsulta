import { ScheduleOutlined, UserOutlined } from '@ant-design/icons'
import { StyledSidebar, StyledList } from '../styles/SidebarStyled'

export function Sidebar(){
  return (
    <StyledSidebar>
        <StyledList>
          <li>
            <ScheduleOutlined style={{color:'#059669'}} />
            <a href="/appointments">Agendamentos</a>
          </li>
          <li>
            <UserOutlined style={{color:'#059669'}} />
            <a href="/patients">Pacientes</a>
          </li>
          <li>
            <UserOutlined style={{color:'#059669'}} />
            <a href="/doctors">Médicos</a>
          </li>
        </StyledList>
    </StyledSidebar>
  )
}