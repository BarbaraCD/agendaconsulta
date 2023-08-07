import axios from 'axios';
import { AppointmentsProps } from '../components/Appointments'
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

export async function createAppointment(newAppointment: AppointmentsProps){
  // alert(JSON.stringify(newAppointment))
  return api.post('/appointment', newAppointment)
}

// export async function createAppointment(newAppointment: AppointmentsProps){
//   try{
//     const response = await axios.post('http://localhost:3333/appointments', newAppointment);
//     return (response.data, newAppointment)
//   } catch(error){
//     throw new Error('Erro ao obter dados dos agendamentos:');
//   }
// }