import React, { useState } from 'react';

import { StyledA, StyledAppointments } from "../styles/Appointments"
import { Patients, PatientsProps } from './Patients';
import { Doctors, DoctorsProps } from './Doctors';
import { SubmitButton } from './SubmitButton';

export const Appointments: React.FC = () => {

  const [selectedDoctor, setSelectedDoctor] = useState<DoctorsProps[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<PatientsProps[]>([]);

  const handleDoctorSelection = (doctor: DoctorsProps) => {
    setSelectedDoctor(doctor);
  };

  const handlePatientSelection = (patient: PatientsProps) => {
    setSelectedPatient(patient);
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