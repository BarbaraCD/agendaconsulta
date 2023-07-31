import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const Agendamentos = () => {
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