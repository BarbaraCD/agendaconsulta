import { CreatePatFormData } from '../components/InputPatient'
import { PatientsProps } from '../components/Patients'
import { api } from './ApiConfig'

export async function getPatient(): Promise<CreatePatFormData> {
  try {
    const response = await api.get('/patient')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter dados dos pacientes:')
  }
}

export async function getPatientById(id: number): Promise<PatientsProps> {
  try {
    const response = await api.get(`/patient/${id}`)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter dados dos pacientes:')
  }
}

export async function createPatient(
  name: string,
  age: number,
  telephone: string,
  email: string,
) {
  return api.post('/patient', {
    name,
    age,
    telephone,
    email,
  })
}

export async function updatePatient(id: number, data: PatientsProps) {
  try {
    const response = await api.put(`/patient/${id}`, data)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter dados dos pacientes:')
  }
}

export async function deletePatient(id: number) {
  return await api.delete(`/patient/${id}`)
}
