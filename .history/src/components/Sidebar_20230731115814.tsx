
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
            <a href="/appointments">Agendamentos</a>
            <RightCircleOutlined />
          </li>
          <li>
            <a href="/patients">Pacientes</a>
            <RightCircleOutlined />
          </li>
          <li>
          <a href="/doctors">Médicos</a>
            <RightCircleOutlined />
          </li>
        </StyledList>
    </StyledSidebar>
  )
}