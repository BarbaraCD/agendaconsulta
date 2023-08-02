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

  const availableEvents: Event[] =[
    {
      title: 'Consulta',
      start: moment().toDate(),
      end: moment().add(50, 'minutes').toDate(),
    }
  ]

  const handleSelect = (event: Event) => {
    setSelectedDate(event.start)
  }

  const handleRedirect = () => {
    if(selectedDate){
      console.log('redirecionando')
    } else {
      console.log('selecine uma data')
    }
  }

  const minDate = moment('2023-06-01').toDate()

  const filteredEvents = availableEvents.filter((event) => event.start >= minDate);
  
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={filteredEvents}
        defaultView='month'
        selectable
        popup
        style={{ height: 500 }}
        onSelectEvent={handleSelect}
      />
      <StyledA onClick={handleRedirect}>Marcar Consulta</StyledA>
      <StyledA href="/appointments">Voltar</StyledA>
    </div>
  )
}