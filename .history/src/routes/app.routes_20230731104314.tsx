import { Routes, Route } from 'react-router-dom'

import { CreateDoctor } from '../components/CreateDoctor'
import { CreatePatient } from '../components/CreatePatient'
import { Sidebar } from '../components/Sidebar'
import { Appointments } from '../components/Appointments'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/patients' element={<CreatePatient />} />
      <Route path='/doctors' element={<CreateDoctor />} />
      <Route path='/appointments' element={<Appointments />} />
    </Routes>
  )
}