
import { useState } from 'react'
import { DoctorsProps } from './Doctors'
import { createDoctor } from '../services/doctor.services'

export function CreateDoctor(){

  const [doctor, setDoctors] = useState<DoctorsProps[]>([])
  const [newDoctor, setNewDoctor] = useState<DoctorsProps>({
    name: '',
    specialization: '',
    crm: 0,
  })

  async function createNewDoctor(){
    if(
      newDoctor?.name.trim() !== '' && 
      newDoctor?.crm.trim() !== '' && 
      newDoctor?.specialization.trim() !== ''
      ){
        await createDoctor({
          name: '',
          specialization: '',
          crm: 0,
        })
      }
  }

  return(
    <></>
  )
}