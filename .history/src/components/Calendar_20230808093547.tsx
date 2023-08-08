import { Calendar, momentLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { StyledA, CalendarStyled, ApFooter } from '../styles/Appointments'

import { AppointmentsProps } from './Appointments'

const localizer = momentLocalizer(moment)

interface Event {
  title: string
  start: Date
  end: Date
}

export const AppointmentsCalendar = () => {

  const availableEvents: Event[] =[
    {
      title: 'Consulta',
      start: moment().toDate(),
      end: moment().add(60, 'minutes').toDate(),
    }
  ]
  
  return (
    <CalendarStyled>
      <Calendar
        localizer={localizer}
        events={availableEvents}
        defaultView='month'
        selectable
        popup
        style={{ height: 600 }}
      />
      <ApFooter>
        <StyledA href="/appointments">Marcar Consulta/Voltar</StyledA>
      </ApFooter>

    </CalendarStyled>
  )
}