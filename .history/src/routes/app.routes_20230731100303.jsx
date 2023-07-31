import { Routes, Route } from 'react-router-dom'

import { CreateDoctor } from '../components/CreateDoctor'
import { CreatePatient } from '../components/CreatePatient'
import { Sidebar } from '../components/Sidebar'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Sidebar />} />
      <Route path='/patients' element={<CreatePatient />} />
      <Route path='/doctors' element={<CreateDoctor />} />
    </Routes>
  )
}