import React, { useState } from 'react'

import { StyledA, StyledAppointments } from "../styles/Appointments"
import { Doctors, DoctorsProps } from './Doctors'
import { SubmitButton } from './SubmitButton'

export type AppointmentsProps = {
  doctorID: number
  patientId: number
  data: string
  hour: string
  symptoms: string
}

export const Appointments: React.FC = () => {

  const [selectedDoctor, setSelectedDoctor] = useState<DoctorsProps[]>([]);

  const handleDoctorSelection = (doctor: DoctorsProps) => {
    setSelectedDoctor(doctor);
  };

  const handleAgendarConsulta = () => {}

  return (
    <StyledAppointments>
      <StyledA href="/calendar">Agenda</StyledA>
      <h2>Lista de Médicos</h2>
      <div>
        {doctor.map((doctor) => (
          <Doctors key={doctor.id} {...Doctors} onClick={() => handleMedicoSelection(doctor)} />
        ))}
      </div>

      <SubmitButton onClick={handleAgendarConsulta} />


    </StyledAppointments>
  )
}