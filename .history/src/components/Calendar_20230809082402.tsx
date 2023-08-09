import { useEffect, useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { deleteAppointment, getAppointment } from '../services/appointment.services';
import { Modal } from 'antd';

import { StyledA, CalendarStyled, ApFooter } from '../styles/Appointments';
import { AppointmentsProps } from './Appointments';
import { getDoctors } from '../services/doctor.services';
import { getPatient } from '../services/patient.services';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const localizer = momentLocalizer(moment);

interface Event {
  title: string;
  start: Date;
  end: Date;
}

export const AppointmentsCalendar = () => {
  const [appointments, setAppointments] = useState<AppointmentsProps[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<AppointmentsProps | null>(null);
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

  const handleSelectEvent =  async (event: Event) => {
    const selected = appointments.find(appointment => moment(appointment.date).isSame(event.start));
    
    if(selected){
      const doctor = await getDoctors(selected.doctorID)
      const patient = await getPatient(selected.patientID)

      setSelectedAppointment({
        ...selected,
        doctorName: doctor.name,
        patientName: patient.name,
      })
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedAppointment(null);
  };

  function handleEditAppointment(){}

  const handleDeleteAppointment = async (id: number) => {
      await deleteAppointment(id)
      await fetchAppointments()
      closeModal()
  }

  const availableEvents: Event[] = appointments.map((appointment) => ({
    title: 'Consulta',
    start: new Date(appointment.date),
    end: moment(appointment.date).add(55, 'minutes').toDate(),
  }));

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
        <StyledA href="/appointments">Marcar Consulta/Voltar</StyledA>
      </ApFooter>

      <Modal
        title="Detalhes da Consulta"
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
      >
        {selectedAppointment && (
          <div>
            <p>Médico: {selectedAppointment.doctorID}</p>
            <p>Paciente: {selectedAppointment.patientID}</p>
            <p>Data: {moment(selectedAppointment.date).format('DD/MM/YYYY HH:mm')}</p>
            <p>Sintomas: {selectedAppointment.symptoms}</p>
            <div>
            <button onClick={() => handleEditAppointment}><EditOutlined /></button>
            <button onClick={() => handleDeleteAppointment(selectedAppointment.id)}><DeleteOutlined /></button>
      </div>
          </div>
        )}
      </Modal>

    </CalendarStyled>
  );
};