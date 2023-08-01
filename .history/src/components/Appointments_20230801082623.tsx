import { styled } from "styled-components"

const StyledCalendar = styled.a`
  display: flex;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  margin-left: 320px;
`

export const Appointments: React.FC = () => {

  return (
    <div>
      <StyledCalendar href="/calendar">Agenda</StyledCalendar>
    </div>
  )
}

