import {
  AppointmentSchemaType,
  AppointmentsProps,
} from '../components/Appointments'
import { api } from './ApiConfig'

export async function getAppointment(): Promise<AppointmentsProps[]> {
  try {
    const response = await api.get('/appointment')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter dados dos agendamentos:')
  }
}

export async function getAppointmentById(
  id: number,
): Promise<AppointmentsProps> {
  try {
    const response = await api.get(`/appointment/${id}`)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter dados dos agendamentos:')
  }
}

export async function createAppointment(newAppointment: AppointmentSchemaType) {
  return api.post('/appointment', newAppointment)
}

export async function updateAppointment(
  id: number,
  data: AppointmentSchemaType,
) {
  try {
    const response = await api.put(`/appointment/${id}`, data)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter dados da consulta:')
  }
}

export async function deleteAppointment(id: number) {
  return await api.delete(`/appointment/${id}`)
}
