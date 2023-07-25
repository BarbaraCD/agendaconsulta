import {} from '../components/Doctors'
import { api } from './ApiConfig'

export async function getDoctors(){
 return api.get('/doctors')
}