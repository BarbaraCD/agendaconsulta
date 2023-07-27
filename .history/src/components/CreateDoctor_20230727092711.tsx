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
`
const DocStyle = styled.div`
  margin-top: 24px;
  padding: 12px 0;

  h3{
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors[100]};
  }
`

export function CreateDoctor(){

  const [doctor, setDoctors] = useState<DoctorsProps[]>([])
  const [newDoctor, setNewDoctor] = useState<DoctorsProps>({
    id: 0,
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
          id: 0,
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

        <DocStyle>
          <h3>Medicos já cadastrados</h3>
          <Doctors key={doctor.id} name={doctor.name} crm={doctor.crm} specialization={doctor.specialization} />
        </DocStyle>
        
    </DocContainer>
  )
}