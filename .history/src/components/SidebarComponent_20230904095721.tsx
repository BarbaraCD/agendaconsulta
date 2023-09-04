import { ScheduleOutlined, UserOutlined } from '@ant-design/icons'
import { StyledList, StyledItem, StyledSidebar } from '../styles/SidebarStyled'
import { Link } from 'react-router-dom'

export function SidebarComponent({ collapsed }) {
  return (
    <StyledSidebar>
      <StyledList>
        <StyledItem component={<Link to="/appointments/calendar" />}>
          {collapsed ? <ScheduleOutlined /> : <>Consultas</>}
        </StyledItem>
        <StyledItem component={<Link to="/patients/list" />}>
          {collapsed ? <UserOutlined /> : <>Pacientes</>}
        </StyledItem>
        <StyledItem component={<Link to="/doctors/list" />}>
          {collapsed ? <UserOutlined /> : <>Médicos</>}
        </StyledItem>
      </StyledList>
    </StyledSidebar>
  )
}
