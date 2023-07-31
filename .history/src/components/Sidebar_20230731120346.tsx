
import { RightCircleOutlined } from '@ant-design/icons'

import { StyledSidebar, StyledList } from '../styles/SidebarStyled'
import { useState } from 'react';



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