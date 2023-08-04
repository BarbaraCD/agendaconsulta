import axios from 'axios';
import { DoctorsProps } from '../components/Doctors'
import { api } from './ApiConfig'

export async function getDoctors(): Promise<DoctorsProps[]> {
  try {
    const response = await axios.get('http://localhost:3333/doctor');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter dados dos pacientes:');
  }
}

export async function createDoctor(newDoctor: DoctorsProps){
  return api.post('/doctor', newDoctor)
}