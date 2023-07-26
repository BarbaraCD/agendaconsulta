import { PatientsProps } from '../components/Patients'
import { api } from './ApiConfig'

export async function getDoctors(): Promise<PatientsProps[]> {
  return api.get('/patient')
}

export async function createDoctor(name: string, crm: number, specialization: string){
  return api.post('/patient', {
    name, 
    crm,
    specialization
  })
}