import {
  ColumnWidthOutlined,
  ScheduleOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { StyledList, StyledItem, StyledSidebar } from '../styles/SidebarStyled'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function SidebarComponent() {
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Atualize aqui a largura máxima para dispositivos móveis, se necessário
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true)
    }
  }, [isMobile])

  return (
    <StyledSidebar collapsed={collapsed}>
      <StyledList>
        <StyledItem>
          <button onClick={toggleSidebar}>
            <ColumnWidthOutlined />
          </button>
        </StyledItem>
        <StyledItem component={<Link to="/appointments/calendar" />}>
          <ScheduleOutlined /> Consultas
        </StyledItem>
        <StyledItem component={<Link to="/patients/list" />}>
          <UserOutlined /> Pacientes
        </StyledItem>
        <StyledItem component={<Link to="/doctors/list" />}>
          <UserOutlined /> Médicos
        </StyledItem>
      </StyledList>
    </StyledSidebar>
  )
}
