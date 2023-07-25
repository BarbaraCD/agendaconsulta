import styled from 'styled-components'
import { Horarios } from './Horarios'
import { Medicos } from './Medicos'
import { Pacientes } from './Pacientes'
import { RightCircleOutlined } from '@ant-design/icons'

const StyledSidebar = styled.div`
  display: flex;
  height: 100vh;
  width: 14vw;
  background-color: ${(props) => props.theme.colors.sbcolor};
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.lg};
  font-weight: 400;
  justify-content: center;
  cursor: pointer;
`

const StyledList = styled.ul`
    flex-direction: column;
    background-color: #f5f5f5;
    display: flex;
    padding: 12px;
    list-style: none;

  li{
    padding: 12px;
    
  }
`

export function Sidebar(){
  return (
    <StyledSidebar>
        <StyledList>
          <li>
            <Horarios />
            <RightCircleOutlined />
          </li>
          <li>
            <Pacientes />
            <RightCircleOutlined />
          </li>
          <li>
            <Medicos />
            <RightCircleOutlined />
          </li>
        </StyledList>
    </StyledSidebar>
  )
}