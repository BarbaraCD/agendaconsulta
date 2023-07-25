import { DoctorsProps } from '../components/Doctors'
import { api } from './ApiConfig'

export async function getDoctors(): Promise<DoctorsProps[]> {
  return api.get('/doctor')
}