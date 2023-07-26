import { useEffect, useState } from 'react'
import { Doctors, DoctorsProps } from './Doctors'
import { createDoctor, getDoctors } from '../services/doctor.services'
import { InputDoctors } from './InputDoctors'
import { SubmitButton } from './SubmitButton'
import { styled } from 'styled-components'

const DocContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  padding: 20px;

  > div{
    padding: 12px;
  }
`

export function CreateDoctor(){

  const [doctor, setDoctors] = useState<DoctorsProps[]>([])
  const [newDoctor, setNewDoctor] = useState<DoctorsProps>({
    name: '',
    specialization: '',
    crm: 0,
  })

  useEffect(() => {
    fetchDoctor().catch((error) => {
      console.error('Error fetching doctors:', error);
    });
  }, []);

  async function fetchDoctor() {
    const response: DoctorsProps[] = await getDoctors();
    const fetchedDoctor = response;
    setDoctors(fetchedDoctor);
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
    <DocContainer>
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

        <div>
          <span>Medicos Cadastrados</span>
          <Doctors name={doctor.name} crm={doctor.crm} specialization={doctor.specialization} />
        </div>
        
    </DocContainer>
  )
}