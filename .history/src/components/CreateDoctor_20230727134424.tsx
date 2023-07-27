import { useEffect, useState } from 'react'
import { Doctors, DoctorsProps } from './Doctors'
import { createDoctor, getDoctors } from '../services/doctor.services'
import { InputDoctors } from './InputDoctors'
import { SubmitButton } from './SubmitButton'
import { Container, Container2 }  from '../styles/CreateContainer'


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
      typeof newDoctor?.crm === 'number' && newDoctor?.crm > 0 && 
      newDoctor?.specialization.trim() !== ''
      ){
        try {
          await createDoctor(newDoctor.name, newDoctor.crm, newDoctor.specialization);
          await fetchDoctor();
            setNewDoctor({
              id: 0,
              name: '',
              crm: 0,
              specialization: ''
            })
        console.log("Médico cadastrado com sucesso!")
        } catch(error){
          console.log("Erro ao cadastrar medico:", error)
        }
      } else {
        console.error("Por favor, preencha todos os campos corretamente.")
      }
  }

  return(
    <Container>
      <InputDoctors
        name={newDoctor.name}
        crm={newDoctor.crm}
        specialization={newDoctor.specialization}
        onNameChange={(value) => setNewDoctor({ ...newDoctor, name: value })}
        onCrmChange={(value) => setNewDoctor({ ...newDoctor, crm: value })}
        onSpecializationChange={(value) =>
          setNewDoctor({ ...newDoctor, specialization: value })
        }
      />

        <SubmitButton onClick={createNewDoctor}/>

        <Container2>
          <h3>Medicos já cadastrados</h3>
          {doctor.length > 0 ? (
            doctor
              .map((doctor, index) => (
                <Doctors
                  key={doctor.id}
                  id={index + 1}
                  name={doctor.name}
                  crm={doctor.crm}
                  specialization={doctor.specialization}
                />
              ))
          ) : (
            <p>
              Não existe medicos cadastrados. Cadastre um novo médico.
            </p>
          )}
        </Container2>
        
    </Container>
  )
}