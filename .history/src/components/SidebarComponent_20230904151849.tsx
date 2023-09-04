import {
  MedicineBoxOutlined,
  ScheduleOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { StyledList, StyledItem, StyledSidebar } from '../styles/SidebarStyled'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function SidebarComponent() {
  const [collapsed, setCollapsed] = useState(false)
  const [isSmaller, setIsSmaller] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsSmaller(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    if (isSmaller) {
      setCollapsed(true)
    } else {
      setCollapsed(false)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isSmaller])

  return (
    <StyledSidebar collapsed={collapsed}>
      <StyledList>
        <StyledItem component={<Link to="/appointments/calendar" />}>
          <ScheduleOutlined /> <span className="show-text">Consultas</span>
        </StyledItem>
        <StyledItem component={<Link to="/patients/list" />}>
          <UserOutlined /> <span className="show-text">Pacientes</span>
        </StyledItem>
        <StyledItem component={<Link to="/doctors/list" />}>
          <MedicineBoxOutlined /> <span className="show-text">Médicos</span>
        </StyledItem>
      </StyledList>
    </StyledSidebar>
  )
}
