import styled from 'styled-components'
import { Horarios } from './Horarios'
import { Medicos } from './Medicos'
import { Pacientes } from './Pacientes'

export const StyledSidebar = styled.div`
  display: flex;
  height: 100vh;
  width: 14vw;
  background-color: ${(props) => props.theme.colors.sbcolor};
  color: #fff;
  padding: 20px 40px;
  font-size: 1.5rem;
  justify-content: center;
`

export const StyledContent = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`

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