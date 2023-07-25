import axios from 'axios'
import {} from '../components/Doctors'
import { api } from './api'

export function getDoctors(){
  axios.get(url)
  .then(response => {
    const data = response.data
    renderResults.textContent = JSON.stringify(data)
  })
}