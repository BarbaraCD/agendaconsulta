
import { useState } from 'react'
import { DoctorsProps } from './Doctors'
import { createDoctor, getDoctors } from '../services/doctor.services'

export function CreateDoctor(){

  const [doctor, setDoctors] = useState<DoctorsProps[]>([])
  const [newDoctor, setNewDoctor] = useState<DoctorsProps>({
    name: '',
    specialization: '',
    crm: 0,
  })

  async function fetchDoctor(){
    const response: any = await getDoctors()
    const fetchedDoctor = response.data
    setDoctors(fetchedDoctor)
  }

  async function createNewDoctor(){
    if(
      newDoctor?.name.trim() !== '' && 
      newDoctor?.crm.trim() !== '' && 
      newDoctor?.specialization.trim() !== ''
      ){
        await createDoctor(newDoctor)
        fetchDoctor()
        setNewDoctor({
          name: '',
          crm: 0,
          specialization: ''
          
        })

      }
  }

  return(
    <></>
  )
}