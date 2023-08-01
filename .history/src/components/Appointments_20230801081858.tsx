import { styled } from "styled-components"

const StyledCalendar = styled.a`
  text-decoration: none;
`

export const Appointments: React.FC = () => {

  return (
    <div>
      <StyledCalendar href="/calendar">Agenda</StyledCalendar>
    </div>
  )
}

