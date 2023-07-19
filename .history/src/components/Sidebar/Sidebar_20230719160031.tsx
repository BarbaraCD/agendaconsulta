import { Horarios } from '../horarios/Horarios'
import { Medicos } from '../medicos/Medicos'
import { Pacientes } from '../pacientes/Pacientes'
import { StyledSidebar } from './Sidebar.styles'

export function Sidebar(){
  return (
    <StyledSidebar>
        <ul>
          <li>
            <Horarios />
          </li>
          <li>
            <Pacientes />
          </li>
          <li>
            <Medicos />
          </li>
        </ul>
    </StyledSidebar>
  )
}