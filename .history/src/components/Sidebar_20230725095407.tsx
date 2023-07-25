import styled from 'styled-components'
import { Horarios } from './Horarios'
import { Medicos } from './Medicos'
import { Pacientes } from './Pacientes'

export const StyledSidebar = styled.div`
  display: flex;
  height: 100vh;
  width: 14vw;
  background-color: ${(props) => props.theme.colors.sbcolor};
  color: ${(props) => props.theme.colors.black};
  padding: 20px 40px;
  font-size: ${(props) => props.theme.size.lg};
  font-weight: 400;
  justify-content: center;

  ul{
    flex: 1;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  }

`

export const StyledContent = styled.div`
  
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