import { StyledSidebar, StyledList } from '../styles/SidebarStyled'
import { Link } from 'react-router-dom'

export function Sidebar(){
  return (
    <StyledSidebar>
        <StyledList>
          <li>
            <link href="/appointments">Agendamentos</link>
          </li>
          <li>
            <link href="/patients">Pacientes</link>
          </li>
          <li>
          <link href="/doctors">Médicos</link>
          </li>
        </StyledList>
    </StyledSidebar>
  )
}