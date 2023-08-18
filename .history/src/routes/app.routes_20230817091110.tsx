import { Routes, Route } from 'react-router-dom'

import { CreateDoctor } from '../components/CreateDoctor'
import { CreatePatient } from '../components/CreatePatient'
import { App } from 'antd'
import { AppointmentsCalendar } from '../components/Calendar'
import { CreateAppointments } from '../components/Appointments'
import { InputPatients } from '../components/InputPatient'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/patients" element={<InputPatients />} />
      <Route path="/doctors" element={<CreateDoctor />} />
      <Route path="/appointments/new" element={<CreateAppointments />} />
      <Route path="/appointments/:id/edit" element={<CreateAppointments />} />
      <Route path="/appointments/calendar" element={<AppointmentsCalendar />} />
    </Routes>
  )
}
