import React, { useState } from 'react';

import { StyledA, StyledAppointments } from "../styles/Appointments"
import { Patients, PatientsProps } from './Patients';
import { Doctors, DoctorsProps } from './Doctors';

export const Appointments: React.FC = () => {

  const [selectedMedico, setSelectedMedico] = useState<DoctorsProps | null>(null);
  const [selectedPaciente, setSelectedPaciente] = useState<PatientsProps | null>(null);

  const handleMedicoSelection = (doctor: DoctorsProps) => {
    setSelectedMedico(doctor);
  };

  const handlePacienteSelection = (patient: PatientsProps) => {
    setSelectedPaciente(patient);
  };

  const handleAgendarConsulta = () => {};

  return (
    <StyledAppointments>
      <StyledA href="/calendar">Agenda</StyledA>
      


    </StyledAppointments>
  )
}