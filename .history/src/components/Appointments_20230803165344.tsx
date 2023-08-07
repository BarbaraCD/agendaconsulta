import React, { useEffect, useState } from 'react'

import { APBody, ApFooter, StyledA, StyledAppointments } from "../styles/Appointments"
import { DoctorsProps } from './Doctors'
import { DatePicker, Select, TimePicker } from 'antd'
import { getDoctors } from '../services/doctor.services'
import { getPatient } from '../services/patient.services'
import { PatientsProps } from './Patients'
import { SubmitButton } from './SubmitButton'

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

  useEffect(() => {
    fetchDoctor()
    fetchPatient()
  }, []);

  async function fetchPatient() {
    const response: PatientsProps[] = await getPatient();
    const fetchedPatient = response;
    setPatients(fetchedPatient);
  }

  async function fetchDoctor() {
    const response: DoctorsProps[] = await getDoctors();
    const fetchedDoctor = response;
    setDoctors(fetchedDoctor);
  }

  const handleDoctorSelect = (value: string) => {
    const selectedDoc = doctors.find((doc) => doc.name === value)
    setSelectedDoctor(selectedDoc || null)
  }

  const handlePatientSelect = (value: string) => {
    const selectedPat = patients.find((pat) => pat.name === value)
    setSelectedPatient(selectedPat || null)
  }

  const handleAgendarConsulta = () => {}

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
          <DatePicker />
          <TimePicker />
      </APBody>

      <StyledA href="/calendar">Horarios disponíveis</StyledA>
      <SubmitButton onClick={handleAgendarConsulta} />

    </StyledAppointments>
  )
}