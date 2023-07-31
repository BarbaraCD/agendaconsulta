import { StyledSidebar, StyledList } from '../styles/SidebarStyled'



export function Sidebar(){
  return (
    <StyledSidebar>
        <StyledList>
          <li>
            <a href="/appointments">Agendamentos</a>
          </li>
          <li>
            <a href="/patients">Pacientes</a>
          </li>
          <li>
          <a href="/doctors">Médicos</a>
          </li>
        </StyledList>
    </StyledSidebar>
  )
}