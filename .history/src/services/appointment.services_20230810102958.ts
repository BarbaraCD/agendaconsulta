import axios from 'axios';
import { AppointmentsProps } from '../components/Appointments'
import { api } from './ApiConfig'

export async function getAppointment(): Promise<AppointmentsProps[]> {
  try {
    const response = await axios.get('http://localhost:3333/appointment');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter dados dos agendamentos:');
  }
}

export async function createAppointment(newAppointment: AppointmentsProps){
  return api.post('/appointment', newAppointment)
}

export async function updateAppointment(id: number, data: AppointmentsProps){
  try {
    const response = await axios.put(`http://localhost:3333/appointment/${id}`, data);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter dados da consulta:');
  }
}

export async function deleteAppointment(id: number) {
  return await api.delete(`/appointment/${id}`)
}