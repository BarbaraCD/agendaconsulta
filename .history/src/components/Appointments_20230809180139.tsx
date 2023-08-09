import React, { useEffect, useState } from 'react'

import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

import { useDispatch } from 'react-redux';
import { addAppointment } from '../features/appointments/appointmentsSlice';

import { getDoctors } from '../services/doctor.services'
import { getPatient } from '../services/patient.services'
import { createAppointment } from '../services/appointment.services'

import { APBody, ApFooter, StyledAppointments, StyledLink } from "../styles/Appointments"
import "antd"
import { Input, Select } from 'antd'

import { DoctorsProps } from './Doctors'
import { PatientsProps } from './Patients'
import { SubmitButton } from './SubmitButton'


export type AppointmentsProps = {
  doctorID: number
  patientID: number
  date: string
  symptoms: string
  id: number
}

export const CreateAppointments: React.FC = () => {
  const [doctors, setDoctors] = useState<DoctorsProps[]>([])
  const [selectedDoctor, setSelectedDoctor] = useState<number>(-1);
  const [patients, setPatients] = useState<PatientsProps[]>([])
  const [selectedPatient, setSelectedPatient] = useState<number>(-1);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [symptoms, setSymptoms] = useState<string>('')
  const [appointments, setAppointments] = useState<AppointmentsProps[]>([]);

  const dispatch = useDispatch();

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
    const selectedDoc = doctors.find((doc) => doc.name === value);
    setSelectedDoctor(selectedDoc ? selectedDoc.id : -1);
  };

  const handlePatientSelect = (value: string) => {
    const selectedPat = patients.find((pat) => pat.name === value);
    setSelectedPatient(selectedPat ? selectedPat.id : -1);
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    } else {
      setSelectedDate(new Date());
    }
  };

  function isWeekday(date: Date) {
    const day = date.getDay();
    return day !== 0 && day !== 6
  }

  function isDateDisabled(date: Date, appointments: AppointmentsProps[]) {
    const selectedDateISO = date.toISOString();
    setAppointments()
    return appointments.some(appointment => appointment.date === selectedDateISO);
  }

  const handleSymptomsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSymptoms(event.target.value);
  };

  const handleScheduleAppointment = () => {
    if (selectedDoctor === -1 || selectedPatient === -1 || !selectedDate) {
      alert('Por favor, selecione o médico, paciente, data e hora.');
      return;
    }
    try {
      const newAppointment: AppointmentsProps = {
        doctorID: selectedDoctor,
        patientID: selectedPatient,
        date: selectedDate.toISOString(),
        symptoms: symptoms,
        id: 0
      };

      createAppointment(newAppointment)
        .then(() => {
          dispatch(addAppointment(newAppointment));
          console.log('Consulta agendada com sucesso!');
        })
        .catch((error) => {
          console.error('Erro ao agendar consulta:', error);
        });
    } catch (error) {
      console.error('Erro ao agendar consulta:', error);
    }
  };

  return (
    <StyledAppointments>
      <h3>Agende agora uma consulta</h3>
      <APBody>
        <Select placeholder='selecione um médico' onChange={handleDoctorSelect}>
          {doctors.map((doc) => (
            <Select.Option key={doc.id} value={doc.name}>{doc.name}</Select.Option>
          ))}
        </Select>
        <Select placeholder='selecione um paciente' onChange={handlePatientSelect}>
          {patients.map((pat) => (
            <Select.Option key={pat.id} value={pat.name}>{pat.name}</Select.Option>
          ))}
        </Select>
        <DatePicker
          showTimeSelect
          minTime={new Date(0, 0, 0, 8, 0)}
          maxTime={new Date(0, 0, 0, 18, 0)}
          minDate={new Date()}
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy HH:mm"
          filterDate={date => isWeekday(date) && !isDateDisabled(date, appointments)}
        />
        <Input
          placeholder='Digite os sintomas'
          value={symptoms}
          onChange={handleSymptomsChange}
        />
      </APBody>

      <ApFooter>
        <SubmitButton onClick={handleScheduleAppointment} />
        <StyledLink to="/appointments/calendar">Horarios disponíveis</StyledLink>
      </ApFooter>

    </StyledAppointments>
  )
}
