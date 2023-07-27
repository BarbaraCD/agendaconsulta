import { DoctorsProps } from '../components/Doctors'
import { api } from './ApiConfig'

export async function getDoctors(): Promise<DoctorsProps[]> {
  return api.get('/doctor')
}

export async function createDoctor(DoctorsProps: string){
  return api.post('/doctor', {
    name, 
    crm,
    specialization
  })
}