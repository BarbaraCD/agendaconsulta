// import { useEffect } from 'react'
import { Calendar, momentLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export const AppointmentsCalendar = () => {
  
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
      <a href="/appointments">Voltar</a>
    </div>
  )
}