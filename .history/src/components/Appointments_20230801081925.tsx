import { styled } from "styled-components"

const StyledCalendar = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
`

export const Appointments: React.FC = () => {

  return (
    <div>
      <StyledCalendar href="/calendar">Agenda</StyledCalendar>
    </div>
  )
}

