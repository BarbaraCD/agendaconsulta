import React, { useEffect, useState } from 'react'

import { StyledA, StyledAppointments } from "../styles/Appointments"
import { DoctorsProps } from './Doctors'
import { createDoctor, getDoctors } from '../services/doctor.services'
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
  const [doctors, setDoctors] = useState<DoctorsProps[]>([])
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorsProps | null>(null);


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