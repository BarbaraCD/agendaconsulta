import { Horarios } from '../horarios/Horarios'
import { Medicos } from '../medicos/Medicos'
import { Pacientes } from '../pacientes/Pacientes'
import { StyledSidebar } from './Sidebar.styles'

export function Sidebar(){
  return (
    <StyledSidebar>
        <Horarios />
        <Pacientes />
        <Medicos />
    </StyledSidebar>
  )
}