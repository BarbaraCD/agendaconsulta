
import { CalendarStyled } from '../styles/Appointments'

import { AppointmentsProps  } from './Appointments'
import { Container3 } from '../styles/CreateContainer'
import { getAppointments } from '../services/appointment.services'
import { useState } from 'react'
import { StyleList } from '../styles/StyleList'
import { Patients, PatientsProps } from './Patients'

// const localizer = momentLocalizer(moment)

// interface Event {
//   title: string
//   start: Date
//   end: Date
// }

export const AppointmentsCalendar = () => {
  const [appointment, setAppointment] = useState<AppointmentsProps>([])

  async function fetchAppointment() {
    try {
      const response: AppointmentsProps[] = await getAppointments();
      setAppointment(response);
    } catch (error) {
      console.error('Error fetching Appointments:', error);
    }
  }

  // const availableEvents: Event[] =[
  //   {
  //     title: 'Consulta',
  //     start: moment().toDate(),
  //     end: moment().add(60, 'minutes').toDate(),
  //   }
  // ]
  
  return (
    <CalendarStyled>
      {/* <Calendar
        localizer={localizer}
        events={availableEvents}
        defaultView='month'
        selectable
        popup
        style={{ height: 600 }}
      />
      <ApFooter>
        <StyledA href="/appointments">Marcar Consulta/Voltar</StyledA>
      </ApFooter> */}

      <Container3>
      <h3>Horários Agendados</h3>
          <table>
            <thead>
              <tr>
                <th>Médico</th>
                <th>Paciente</th>
                <th>Horario</th>
                <th>Sintomas</th>
              </tr>
            </thead>
          </table>
          {appointment.length > 0 && (
            appointment.map((appointment, index) => (
              <Patients
                key={index + 1}
                doctorID={appointment.}
                patientID={appointment.age}
                date={appointment.telephone}
                symmptoms={appointment.email}
              />
            ))
          )}


      </Container3>

    </CalendarStyled>
  )
}

function Appointments(props: AppointmentsProps){

  return(
    <StyleList>
      <table>
        <tbody>
            <td><span>{props.doctorID}</span></td>
            <td><span>{props.patientId}</span></td>
            <td><span>{props.date}</span></td>
            <td><span>{props.symptoms}</span></td>
        </tbody>
      </table>
    </StyleList>
  )
}