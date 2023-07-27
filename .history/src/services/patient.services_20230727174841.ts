import axios from 'axios';
import { PatientsProps } from '../components/Patients'
import { api } from './ApiConfig'

export async function getPatient(): Promise<PatientsProps[]> {
  try {
    const response = await axios.get('/patient');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados dos pacientes:', error);
    throw error; // Lançar o erro novamente para que o componente que chamar a função possa tratá-lo
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