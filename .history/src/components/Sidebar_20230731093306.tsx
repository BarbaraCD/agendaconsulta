import styled from 'styled-components'
import { RightCircleOutlined } from '@ant-design/icons'
import { Patients } from './Patients'

const StyledSidebar = styled.div`
  display: flex;
  height: 100vh;
  width: 18vw;
  background-color: ${(props) => props.theme.colors.sbcolor};
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.lg};
  font-weight: 400;
  justify-content: start;
  
`

const StyledList = styled.ul`
    flex-direction: column;
    display: flex;
    padding: 12px;
    list-style: none;
    gap: 20px;

  li{
    cursor: pointer;
    padding: 12px;
    line-height: 22px;
    justify-content: space-between;
    text-align: center;
  }
`

export function Sidebar(){
  return (
    <StyledSidebar>
        <StyledList>
          <li>
            Horarios
            <RightCircleOutlined />
          </li>
          <li>
            <Patients />
            <RightCircleOutlined />
          </li>
          <li>
            Medicos
            <RightCircleOutlined />
          </li>
        </StyledList>
    </StyledSidebar>
  )
}