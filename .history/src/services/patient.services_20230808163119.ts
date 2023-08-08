import axios from 'axios';
import { PatientsProps } from '../components/Patients'
import { api } from './ApiConfig'

export async function getPatient(): Promise<PatientsProps[]> {
  try {
    const response = await axios.get('http://localhost:3333/patient');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter dados dos pacientes:');
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

export async function updatePatient(props: PatientsProps){
  try {
    const response = await axios.put(`http://localhost:3333/patient/${props.id}`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter dados dos pacientes:');
  }
}

export async function deletePatient(id: number) {
  return await api.delete(`/patient/${id}`)
}