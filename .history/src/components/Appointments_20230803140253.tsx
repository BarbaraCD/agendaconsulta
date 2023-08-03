import React, { useState } from 'react'

import { StyledA, StyledAppointments } from "../styles/Appointments"
import { Doctors, DoctorsProps } from './Doctors'
import { SubmitButton } from './SubmitButton'
import { Select } from 'antd'

export type AppointmentsProps = {
  doctorID: number
  patientId: number
  data: string
  hour: string
  symptoms: string
}

export const Appointments: React.FC = () => {
  const [doctor, setDoctors] = useState<DoctorsProps[]>([])
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorsProps[]>([]);

  const handleDoctorSelection = (doctor: DoctorsProps) => {
    setSelectedDoctor(doctor);
  };

  const handleAgendarConsulta = () => {}

  return (
    <StyledAppointments>
      <StyledA href="/calendar">Agenda</StyledA>
      <Select placeholder='selecione um médico'>
        {doctor.map((doctor) => (
          
        ))}
      </Select>

      <SubmitButton onClick={handleAgendarConsulta} />


    </StyledAppointments>
  )
}