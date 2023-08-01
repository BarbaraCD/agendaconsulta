import { styled } from "styled-components"

const StyledCalendar = styled.a`
  text-decoration: none;
`

export const Appointments: React.FC = () => {

  return (
    <div>
      <a href="/calendar">Agenda</a>
    </div>
  )
}

