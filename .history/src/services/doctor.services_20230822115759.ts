import { DoctorsProps } from '../components/Doctors'
import { api } from './ApiConfig'

export async function getDoctors(): Promise<DoctorsProps[]> {
  try {
    const response = await api.get('/doctor')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter dados dos pacientes:')
  }
}

export async function getDoctorById(id: number): Promise<DoctorsProps> {
  try {
    const response = await api.get(`/doctor/${id}`)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter dados dos Medicos:')
  }
}

export async function createDoctor(data: DoctorsProps) {
  return api.post('/doctor', data)
}

export async function updateDoctor(id: number, data: DoctorsProps) {
  try {
    const response = await api.put(`/doctor/${id}`, data)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter dados dos pacientes:')
  }
}

export async function deleteDoctor(id: number) {
  return await api.delete(`/doctor/${id}`)
}
