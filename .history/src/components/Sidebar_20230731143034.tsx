import { StyledSidebar, StyledList } from '../styles/SidebarStyled'
import { Link } from 'react-router-dom'

export function Sidebar(){
  return (
    <StyledSidebar>
        <StyledList>
          <li>
            <Link href="/appointments">Agendamentos</Link>
          </li>
          <li>
            <Link href="/patients">Pacientes</Link>
          </li>
          <li>
          <Link href="/doctors">Médicos</Link>
          </li>
        </StyledList>
    </StyledSidebar>
  )
}