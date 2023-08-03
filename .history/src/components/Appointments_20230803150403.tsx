import React, { useEffect, useState } from 'react'

import { StyledA, StyledAppointments } from "../styles/Appointments"
import { DoctorsProps } from './Doctors'
import { Select } from 'antd'
import { getDoctors } from '../services/doctor.services'
import { getPatient } from '../services/patient.services'
import { PatientsProps } from './Patients'

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
    getDoctors().then((data) => setDoctors(data));
    getPatient().then((data) => setPatients(data))
  }, []);

  const handleDoctorSelect = (value: string) => {
    const selected = doctor.find((doc) => doc.name === value)
    setSelectedDoctor(selected || null)
  }

  // const handleAgendarConsulta = () => {}

  return (
    <StyledAppointments>
      <div>
        <Select placeholder='selecione um médico'>
          {doctors.map((doc) => (
          <Select.Option key={doc.id} value={doc.name}>{doc.name}</Select.Option> 
          ))}
        </Select>

      </div>

      <div>
        <StyledA href="/calendar">Agenda</StyledA>
        {/* <SubmitButton onClick={handleAgendarConsulta} /> */}
      </div>
    </StyledAppointments>
  )
}