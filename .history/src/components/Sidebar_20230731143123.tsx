import { StyledSidebar, StyledList } from '../styles/SidebarStyled'
import { Link } from 'react-router-dom'

export function Sidebar(){
  return (
    <StyledSidebar>
        <StyledList>
          <li>
            <Link to="/appointments">Agendamentos</Link>
          </li>
          <li>
            <Link to="/patients">Pacientes</Link>
          </li>
          <li>
          <Link to="/doctors">Médicos</Link>
          </li>
        </StyledList>
    </StyledSidebar>
  )
}