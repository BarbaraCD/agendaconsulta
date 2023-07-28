import axios from 'axios';
import { PatientsProps } from '../components/Patients'
import { api } from './ApiConfig'

export async function getPatient(): Promise<PatientsProps[]> {
  try {
    const response = await axios.get('./ApiConfig');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter dados dos pacientes:', error);
  }
}

export async function createPatient(name: string, age: number, telephone: number, email: string){
  return api.post('/patient', {
    name,
    age,
    telephone,
    email,
  })
}