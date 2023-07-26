import { useEffect, useState } from 'react'
import { Doctors, DoctorsProps } from './Doctors'
import { createDoctor, getDoctors } from '../services/doctor.services'
import { InputDoctors } from './InputDoctors'
import { SubmitButton } from './SubmitButton'

export function CreateDoctor(){

  const [doctor, setDoctors] = useState<DoctorsProps[]>([])
  const [newDoctor, setNewDoctor] = useState<DoctorsProps>({
    name: '',
    specialization: '',
    crm: 0
  })

  useEffect(() => {
    fetchDoctor()
  }, [])

  async function fetchDoctor(){
    const response: any = await getDoctors()
    const fetchedDoctor = response.data
    setDoctors(fetchedDoctor)
  }

  async function createNewDoctor(){
    if(
      newDoctor?.name.trim() !== '' && 
      newDoctor?.crm.trim() !== '' && 
      newDoctor?.specialization.trim() !== 0
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
    <>
      <InputDoctors
        name={newDoctor.name}
        especializacao={newDoctor.specialization}
        crm={newDoctor.crm.toString()}
        onNameChange={(value) => setNewDoctor({ ...newDoctor, name: value })}
        onEspecializacaoChange={(value) =>
          setNewDoctor({ ...newDoctor, specialization: value })
        }
        onCrmChange={(value) => setNewDoctor({ ...newDoctor, crm: value })}
      />

        <SubmitButton onClick={createNewDoctor}/>

        <span>Medicos Cadastrados</span>
        <Doctors name={doctor.name} crm={doctor.crm} specialization={doctor.specialization} />
    </>
  )
}