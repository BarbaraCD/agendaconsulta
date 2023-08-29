/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {
  deleteAppointment,
  getAppointment,
} from '../services/appointment.services'
import { ApFooter } from '../styles/InputContainer.ts'
import {
  CalendarStyled,
  StyledLink,
  StyledModal,
  StyledQuestion,
} from '../styles/Appointments'
import { getDoctorById } from '../services/doctor.services'
import { getPatientById } from '../services/patient.services'
import {
  CloseSquareOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons'
import { PatientsTypes } from '../model/patients.ts'
import { DoctorsTypes } from '../model/doctors.ts'
import { AppointmentsProps } from './Appointments.tsx'

const localizer = momentLocalizer(moment)

interface Event {
  title: string
  start: Date
  end: Date
}

type SelectedAppointmentType = AppointmentsProps & {
  doctor: DoctorsTypes
  patient: PatientsTypes
}

export const AppointmentsCalendar = () => {
  const [appointments, setAppointments] = useState<AppointmentsProps[]>([])
  const [selectedAppointment, setSelectedAppointment] =
    useState<SelectedAppointmentType | null>(null)
  const [selectedAppointmentId, setSelectedAppointmentId] = useState<
    number | null
  >(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  useEffect(() => {
    fetchAppointments().catch((error) => {
      console.error('Error fetching Appointments:', error)
    })
  }, [])

  async function fetchAppointments() {
    try {
      const response: AppointmentsProps[] = await getAppointment()
      setAppointments(response)
    } catch (error) {
      console.error('Error fetching Appointments:', error)
    }
  }

  const availableEvents: Event[] = appointments.map((appointment) => ({
    title: 'Consulta',
    start: new Date(appointment.date),
    end: moment(appointment.date).add(55, 'minutes').toDate(),
  }))

  const handleSelectEvent = async (event: Event) => {
    const selected = appointments.find((appointment) =>
      moment(appointment.date).isSame(event.start),
    )
    if (selected) {
      const doctor = await getDoctorById(selected.doctorID).catch(() => null)
      const patient = await getPatientById(selected.patientID).catch(() => null)

      setSelectedAppointment({
        ...selected,
        doctor,
        patient,
      })
    }
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
    setSelectedAppointment(null)
  }

  const handleDeleteAppointment = (id: number) => {
    setSelectedAppointmentId(id)
    setShowDeleteConfirmation(true)
  }

  const confirmDelete = async (id: number) => {
    await deleteAppointment(id)
    await fetchAppointments()
    closeModal()
    setShowDeleteConfirmation(false)
  }

  const cancelDelete = () => {
    setSelectedAppointmentId(null)
    setShowDeleteConfirmation(false)
  }

  return (
    <CalendarStyled>
      <Calendar
        localizer={localizer}
        events={availableEvents}
        defaultView="month"
        selectable
        popup
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
      />
      <ApFooter>
        <StyledLink to="/appointments/new">Marcar Consulta/Voltar</StyledLink>
      </ApFooter>

      <StyledModal
        title={<h3>Detalhes da Consulta</h3>}
        open={modalVisible}
        onCancel={closeModal}
        footer={null}
      >
        {selectedAppointment && (
          <div>
            <p>Médico: {selectedAppointment.doctor.name}</p>
            <p>Paciente: {selectedAppointment.patient.name}</p>
            <p>
              Data:{' '}
              {moment(selectedAppointment.date).format('DD/MM/YYYY HH:mm')}
            </p>
            <p>Sintomas: {selectedAppointment.symptoms}</p>
            <div>
              <button>
                <StyledLink to={`/appointments/${selectedAppointment.id}/edit`}>
                  <EditOutlined />
                </StyledLink>
              </button>
              <button
                onClick={() => handleDeleteAppointment(selectedAppointment.id)}
              >
                <DeleteOutlined />
              </button>
            </div>
          </div>
        )}

        {showDeleteConfirmation && (
          <StyledQuestion>
            <p>Tem certeza que deseja excluir?</p>
            <button
              className="button-sim"
              onClick={() => confirmDelete(selectedAppointmentId!)}
            >
              <DeleteOutlined />
              Excluir
            </button>
            <button className="button-nao" onClick={() => cancelDelete()}>
              <CloseSquareOutlined />
              Não
            </button>
          </StyledQuestion>
        )}
      </StyledModal>
    </CalendarStyled>
  )
}
