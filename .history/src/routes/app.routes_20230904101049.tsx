import { Routes, Route } from 'react-router-dom'

import { App } from 'antd'
import { AppointmentsCalendar } from '../components/Calendar'
import { InputPatients } from '../components/InputPatient'
import { DoctorTable } from '../components/DoctorTable'
import { PatientTable } from '../components/PatientTable'
import { InputDoctors } from '../components/InputDoctors'
import { CreateAppointments } from '../components/Appointments'
import { Header } from '../components/Header'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />

      <Route path="/patients/new" element={<InputPatients />} />
      <Route path="/patients/:id/edit" element={<InputPatients />} />
      <Route path="/patients/list" element={<PatientTable />} />

      <Route path="/doctors/new" element={<InputDoctors />} />
      <Route path="/doctors/:id/edit" element={<InputDoctors />} />
      <Route path="/doctors/list" element={<DoctorTable />} />

      <Route path="/appointments/new" element={<CreateAppointments />} />
      <Route path="/appointments/:id/edit" element={<CreateAppointments />} />
      <Route path="/appointments/calendar" element={<AppointmentsCalendar />} />
    </Routes>
  )
}
