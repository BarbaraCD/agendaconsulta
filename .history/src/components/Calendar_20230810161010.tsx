import { useEffect, useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { deleteAppointment, getAppointment, getAppointmentById } from '../services/appointment.services';

import { CalendarStyled, ApFooter, StyledLink, StyledModal } from '../styles/Appointments';
import { AppointmentsProps } from './Appointments';
import { getDoctorById } from '../services/doctor.services';
import { getPatientById } from '../services/patient.services';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { PatientsTypes } from '../model/patients';
import { DoctorsTypes } from '../model/doctors';

const localizer = momentLocalizer(moment);

interface Event {
  title: string;
  start: Date;
  end: Date;
}


type SelectedAppointmentType = AppointmentsProps & {
  doctor: DoctorsTypes
  patient: PatientsTypes
}

export const AppointmentsCalendar = () => {
  const [appointments, setAppointments] = useState<AppointmentsProps[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<SelectedAppointmentType | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchAppointments().catch((error) => {
      console.error('Error fetching Appointments:', error);
    });
  }, []);

  async function fetchAppointments() {
    try {
      const response: AppointmentsProps[] = await getAppointment(); 
      setAppointments(response);
    } catch (error) {
      console.error('Error fetching Appointments:', error);
    }
  }

  const availableEvents: Event[] = appointments.map((appointment) => ({
    title: 'Consulta',
    start: new Date(appointment.date),
    end: moment(appointment.date).add(55, 'minutes').toDate(),
  }));

  const handleSelectEvent =  async (event: Event) => {
    const selected = appointments.find(appointment => moment(appointment.date).isSame(event.start));
    if(selected){
      const doctor = await getDoctorById(selected.doctorID)
      const patient = await getPatientById(selected.patientID)

      setSelectedAppointment({
        ...selected,
        doctor,
        patient,        
      })
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedAppointment(null);
  };

  const handleDeleteAppointment = async (id: number) => {
      await deleteAppointment(id)
      await fetchAppointments()
      closeModal()
  }

  const onClickEdit = async (appointment: AppointmentsProps) => {
    try {
      const selectedAP = await getAppointmentById(appointment.id);
      const doctor = await getDoctorById(selectedAP.doctorID);
      const patient = await getPatientById(selectedAP.patientID);
  
      setSelectedAppointment({
        ...selectedAP,
        doctor,
        patient,
      });
      setModalVisible(true);
    } catch (error) {
      console.error('Error fetching appointment:', error);
    }
  };
  

  return (
    <CalendarStyled>
      <Calendar
        localizer={localizer}
        events={availableEvents}
        defaultView='month'
        selectable
        popup
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
      />
      <ApFooter>
        <StyledLink to="/appointments">Marcar Consulta/Voltar</StyledLink>
      </ApFooter>

      <StyledModal
        title={<h3>"Detalhes da Consulta"</h3>}
        open={modalVisible}
        onCancel={closeModal}
        footer={null}
      >
        {selectedAppointment && (
          <div>
            <p>Médico: {selectedAppointment.doctor.name}</p>
            <p>Paciente: {selectedAppointment.patient.name}</p>
            <p>Data: {moment(selectedAppointment.date).format('DD/MM/YYYY HH:mm')}</p>
            <p>Sintomas: {selectedAppointment.symptoms}</p>
            <div>
              <button onClick={() => onClickEdit(selectedAppointment)}><EditOutlined /></button>
              <button onClick={() => handleDeleteAppointment(selectedAppointment.id)}><DeleteOutlined /></button>
            </div>
          </div>
        )}
      </StyledModal>

    </CalendarStyled>
  );
};