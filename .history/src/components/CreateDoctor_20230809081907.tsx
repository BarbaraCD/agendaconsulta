import { useEffect, useState } from 'react'
import { Doctors, DoctorsProps } from './Doctors'
import { createDoctor, deleteDoctor, getDoctors, updateDoctor } from '../services/doctor.services'
import { InputDoctors } from './InputDoctors'
import { SubmitButton } from './SubmitButton'
import { Container, Container2, Container3 }  from '../styles/CreateContainer'
import { DoctorsTypes } from '../model/doctors'


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
    try {
      const response: DoctorsProps[] = await getDoctors();
      setDoctors(response);
    } catch (error) {
      console.error('Error fetching Doctors:', error);
    }
  }

  async function createNewDoctor(){
    if(
      newDoctor?.name.trim() !== '' && 
      typeof newDoctor?.crm === 'number' && newDoctor?.crm > 0 && 
      newDoctor?.specialization.trim() !== ''
      ){
        try {
          if (newDoctor.id === 0) {
            await createDoctor(
              newDoctor.name,
              newDoctor.crm,
              newDoctor.specialization
            );
          } else {
            await updateDoctor(newDoctor.id, {
              name: newDoctor.name,
              crm: newDoctor.crm,
              specialization: newDoctor.specialization,
            });
          }
          await fetchDoctor();
          setNewDoctor({
            id: 0,
            name: '',
            crm: 0,
            specialization: ''
          });
          console.log("Médico cadastrado/atualizado com sucesso!");
        } catch (error) {
          console.log("Erro ao cadastrar/atualizar médico:", error);
        }
      } else {
        console.error("Por favor, preencha todos os campos corretamente.");
      }
    }


  const removeDoctor = async (id: number) => {
    await deleteDoctor(id)
    await fetchDoctor()
  }

  const onClickEdit = (doctors: DoctorsTypes) => {
    setNewDoctor(doctors)
  }

  return(
    <Container>
      <Container2>
        <h3>Cadastrar um novo médico</h3>
        <InputDoctors
          name={newDoctor.name}
          crm={newDoctor.crm}
          specialization={newDoctor.specialization}
          id={newDoctor.id}
          onNameChange={(value) => setNewDoctor({ ...newDoctor, name: value })}
          onCrmChange={(value) => setNewDoctor({ ...newDoctor, crm: value })}
          onSpecializationChange={(value) =>
            setNewDoctor({ ...newDoctor, specialization: value })
          }
        />

          <SubmitButton onClick={createNewDoctor}/>
      </Container2>
        <Container3>
          <h3>Medicos já cadastrados</h3>
          <table>
            <thead>
              <tr>
                <th>CRM</th>
                <th>Nome</th>
                <th>Especialização</th>
                <th> </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {doctor.length > 0 && (
                doctor
                  .map((doctor, index) => (
                    <Doctors
                      key={doctor.id}
                      id={index + 1}
                      crm={doctor.crm}
                      name={doctor.name}
                      specialization={doctor.specialization}
                      handleDelete = {() => removeDoctor(doctor.id)}
                      handleEdit={() => onClickEdit(doctor)}
                    />
                  ))
              )}
            </tbody>
          </table>
        </Container3>
        
    </Container>
  )
}