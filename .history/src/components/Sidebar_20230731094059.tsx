
import { RightCircleOutlined } from '@ant-design/icons'
import { CreatePatient } from './CreatePatient'

import { StyledSidebar, StyledList } from '../styles/SidebarStyled'



export function Sidebar(){
  return (
    <StyledSidebar>
        <StyledList>
          <li>
            Horarios
            <RightCircleOutlined />
          </li>
          <li onClick={handlePacientClick}>
            <CreatePatient />
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