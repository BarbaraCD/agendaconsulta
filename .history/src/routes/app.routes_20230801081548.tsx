import { Routes, Route } from 'react-router-dom'

import { CreateDoctor } from '../components/CreateDoctor'
import { CreatePatient } from '../components/CreatePatient'
import { Appointments } from '../components/Appointments'
import { App } from 'antd'
import { Agendamentos } from '../components/Calendar'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/patients' element={<CreatePatient />} />
      <Route path='/doctors' element={<CreateDoctor />} />
      <Route path='/appointments' element={<Appointments />} />
      <Route path='/calendar' element={<Agendamentos />} />

    </Routes>
  )
}