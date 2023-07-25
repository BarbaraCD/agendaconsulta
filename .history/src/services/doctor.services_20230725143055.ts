import {} from '../components/Doctors'
import { api } from './api'

export async function getDoctors(){
 return api.get('/doctors')
}