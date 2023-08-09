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

export async function getDoctorById(): Promise<DoctorsProps[]> {
  try {
    const response = await axios.get('http://localhost:3333/doctor');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter dados dos pacientes:');
  }
}


export async function createDoctor(name: string, crm: number, specialization: string){
  return api.post('/doctor', {
    name, 
    crm,
    specialization
  })
}

export async function updateDoctor(id: number, data: any){
  try {
    const response = await axios.put(`http://localhost:3333/doctor/${id}`, data);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter dados dos pacientes:');
  }
}

export async function deleteDoctor(id: number) {
  return await api.delete(`/doctor/${id}`)
}