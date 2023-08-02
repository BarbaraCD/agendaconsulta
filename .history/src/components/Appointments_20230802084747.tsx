import React, { useState } from 'react';

import { StyledA, StyledAppointments } from "../styles/Appointments"
import { Patients, PatientsProps } from './Patients';
import { Doctors, DoctorsProps } from './Doctors';
import { SubmitButton } from './SubmitButton';

export const Appointments: React.FC = () => {

  const [selectedMedico, setSelectedMedico] = useState<DoctorsProps | null>(null);
  const [selectedPaciente, setSelectedPaciente] = useState<PatientsProps | null>(null);

  const handleDoctorSelection = (doctor: DoctorsProps) => {
    setSelectedMedico(doctor);
  };

  const handlePatientSelection = (patient: PatientsProps) => {
    setSelectedPaciente(patient);
  }

  const handleAgendarConsulta = () => {}

  return (
    <StyledAppointments>
      <StyledA href="/calendar">Agenda</StyledA>
      <h2>Lista de Médicos</h2>
      <div>
        {doctor.map((medico) => (
          <Doctors key={doctor.id} {...doctor} onClick={() => handleMedicoSelection(doctor)} />
        ))}
      </div>

      <h2>Lista de Pacientes</h2>
      <div>
        {patients.map((patient) => (
          <Patients key={patient.id} {...patient} onClick={() => handlePatientSelection(patient)} />
        ))}
      </div>

      <SubmitButton onClick={handleAgendarConsulta} />


    </StyledAppointments>
  )
}