
import { RightCircleOutlined } from '@ant-design/icons'

import { StyledSidebar, StyledList } from '../styles/SidebarStyled'
import { useState } from 'react';



export function Sidebar(){
  const [showPacient, setShowPacient] = useState(false)

  const handlePatientClick = () => {
    setShowPacient(true);
  };

  return (
    <StyledSidebar>
        <StyledList>
          <li>
            Horarios
            <RightCircleOutlined />
          </li>
          <li>
            <a href="/patients">Pacientes</a>
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