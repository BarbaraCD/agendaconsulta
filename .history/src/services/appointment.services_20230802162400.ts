import axios from 'axios';
// import { AppointmentsProps } from '../components/Appointments'
import { api } from './ApiConfig'

export async function getAppointments(): Promise<AppointmentsProps[]> {
  try {
    const response = await axios.get('http://localhost:3333/appointments');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter dados dos agendamentos:');
  }
}

export async function createDoctor(doctorID: number, patientId: number, data: Date, hour: string, symptoms: string){
  return api.post('/appointments', {
    doctorID,
    patientId,
    data,
    hour,
    symptoms
  })
}