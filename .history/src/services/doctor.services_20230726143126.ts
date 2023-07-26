import { DoctorsProps } from '../components/Doctors'
import { api } from './ApiConfig'

export async function getDoctors() {
  return api.get('/doctor')
}

export async function createDoctor(name: string, crm: number, specialization: string){
  return api.post('/doctor', {
    name, 
    crm,
    specialization
  })
}