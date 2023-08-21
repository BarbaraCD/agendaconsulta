import { Routes, Route } from 'react-router-dom'

import { CreateDoctor } from '../components/CreateDoctor'
import { App } from 'antd'
import { AppointmentsCalendar } from '../components/Calendar'
import { CreateAppointments } from '../components/Appointments'
import { CreatePatient } from '../components/CreatePatients'
import { InputPatients } from '../components/InputPatient'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/patients/new" element={<InputPatients />} />
      <Route path="/patients/:id/edit" element={<InputPatients />} />
      <Route path="/doctors" element={<CreateDoctor />} />
      <Route path="/appointments/new" element={<CreateAppointments />} />
      <Route path="/appointments/:id/edit" element={<CreateAppointments />} />
      <Route path="/appointments/calendar" element={<AppointmentsCalendar />} />
      <Route path="/patients/list" element={<CreatePatient />} />
    </Routes>
  )
}
