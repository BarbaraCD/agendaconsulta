import React, { useEffect, useState } from 'react'

import { APBody, ApFooter, StyledA, StyledAppointments } from "../styles/Appointments"
import { DoctorsProps } from './Doctors'
import { DatePicker, Select, TimePicker } from 'antd'
import { getDoctors } from '../services/doctor.services'
import { getPatient } from '../services/patient.services'
import { PatientsProps } from './Patients'
import { SubmitButton } from './SubmitButton'
import { createAppointment } from '../services/appointment.services'

export type AppointmentsProps = {
  doctorID: number
  patientId: number
  data: string
  hour: string
  symptoms: string
}

export const Appointments: React.FC = () => {
  const [doctors, setDoctors] = useState<DoctorsProps[]>([])
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorsProps | null>(null);
  const [patients, setPatients] = useState<PatientsProps[]>([])
  const [selectedPatient, setSelectedPatient] = useState<PatientsProps | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const [newAppointment, setNewAppointment] = useState<AppointmentsProps[]>([])

  useEffect(() => {
    fetchInfos().catch((error) => {
      console.error('Error fetching Patients:', error);
    });
  }, []);

  async function fetchInfos() {
    try {
      const responseDoc: DoctorsProps[] = await getDoctors();
      const responsePat: PatientsProps[] = await getPatient();
      setDoctors(responseDoc);
      setPatients(responsePat);
    } catch (error) {
      console.error('Error fetching Infos:', error);
    }
  }

  const handleDoctorSelect = (value: string) => {
    const selectedDoc = doctors.find((doc) => doc.name === value)
    setSelectedDoctor(selectedDoc || null)
  }

  const handlePatientSelect = (value: string) => {
    const selectedPat = patients.find((pat) => pat.name === value)
    setSelectedPatient(selectedPat || null)
  }

  const handleDateChange = (date: Date, dateString: string) => {
    setSelectedDate(dateString);
  };

  const handleTimeChange = (time: Date, timeString: string) => {
    setSelectedTime(timeString);
  };

  const handleAgendarConsulta = () => {
    if (selectedDoctor && selectedPatient && selectedDate && selectedTime) {
      const newAppointment: AppointmentsProps = {
        doctorID: selectedDoctor.id,
        patientId: selectedPatient.id,
        data: selectedDate,
        hour: selectedTime,
        symptoms: '',
      };

      createAppointment(newAppointment)
        .then(() => {})
        .catch((error) => {});
    } else {
      console.error('Preencha todas as informações antes de agendar a consulta.');
    }
  }

  return (
    <StyledAppointments>
      <h3>Agende agora uma consulta</h3>
      <APBody>
        <Select placeholder='selecione um médico'>
          {doctors.map((doc) => (
          <Select.Option key={doc.id} value={doc.name}>{doc.name}</Select.Option> 
          ))}
        </Select>
        <Select placeholder='selecione um paciente'>
          {doctors.map((pat) => (
          <Select.Option key={pat.id} value={pat.name}>{pat.name}</Select.Option> 
          ))}
        </Select>
          <DatePicker onChange={handleDateChange} />
          <TimePicker onChange={handleTimeChange} />
      </APBody>

      <ApFooter>
        <SubmitButton onClick={handleAgendarConsulta} />
        <StyledA href="/calendar">Horarios disponíveis</StyledA>
      </ApFooter>

    </StyledAppointments>
  )
}