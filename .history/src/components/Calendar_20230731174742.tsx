import { Calendar, momentLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export const Agendamentos = () => {
  return (
    <div>
      <h2>Agendamentos</h2>
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
    </div>
  )
}