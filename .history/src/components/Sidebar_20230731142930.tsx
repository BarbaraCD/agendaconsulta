import { StyledSidebar, StyledList } from '../styles/SidebarStyled'

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