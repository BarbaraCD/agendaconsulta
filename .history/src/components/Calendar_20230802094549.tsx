// import { useEffect } from 'react'
import { Calendar, momentLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { StyledA } from '../styles/Appointments'
import { useState } from 'react'

const localizer = momentLocalizer(moment)

interface Event {
  title: string
  start: Date
  end: Date
}

export const AppointmentsCalendar = () => {

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const availableEvent: Event[] =[
    {
      title: 'Horario disponível',
      start: moment().toDate(),
      end: moment().add(50, 'minutes').toDate(),
    }
  ]

  const handleSelect = (event: Event) => {
    setSelectedDate(event.start)
  }
  
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={[
          {
            title: "Evento teste", 
            start: moment().toDate(), 
            end: moment().add(30, 'minutes').toDate()
          }
        ]}
        defaultView='week'
        selectable
        popup
        style={{ height: 500 }}
      />
      <StyledA href="/appointments">Voltar</StyledA>
    </div>
  )
}