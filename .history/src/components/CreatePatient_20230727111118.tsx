import { useEffect, useState } from 'react'
import { Patients, PatientsProps } from './Patients'
import { createPatient, getPatient } from '../services/Patient.services'
import { InputPatients } from './InputPatients'
import { SubmitButton } from './SubmitButton'
import { styled } from 'styled-components'

const PatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  padding: 20px;
`
const PatStyle = styled.div`
  margin-top: 24px;
  padding: 12px 0;

  h3{
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors[100]};
  }
`

export function CreatePatient(){

  const [patient, setPatients] = useState<PatientsProps[]>([])
  const [newPatient, setNewPatient] = useState<PatientsProps>({
    name: '',
    age: 0,
    telephone: 0,
    email:''
  })

  useEffect(() => {
    fetchPatient().catch((error) => {
      console.error('Error fetching Patients:', error);
    });
  }, []);

  async function fetchPatient() {
    const response: PatientsProps[] = await getPatients();
    const fetchedPatient = response;
    setPatients(fetchedPatient);
  }

  async function createNewPatient(){
    if(
      newPatient?.name.trim() !== '' && 
      typeof newPatient?.crm === 'number' && newPatient?.crm > 0 && 
      newPatient?.specialization.trim() !== ''
      ){
        try {
          await createPatient(newPatient.name, newPatient.crm, newPatient.specialization);
          await fetchPatient();
            setNewPatient({
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
    <PatContainer>
      <InputPatients
        name={newPatient.name}
        crm={newPatient.crm}
        specialization={newPatient.specialization}
        onNameChange={(value) => setNewPatient({ ...newPatient, name: value })}
        onCrmChange={(value) => setNewPatient({ ...newPatient, crm: value })}
        onSpecializationChange={(value) =>
          setNewPatient({ ...newPatient, specialization: value })
        }
      />

        <SubmitButton onClick={createNewPatient}/>

        <PatStyle>
          <h3>Medicos já cadastrados</h3>
          {Patient.length > 0 ? (
            Patient
              .map((Patient, index) => (
                <Patients
                  key={patient.id}
                  id={index + 1}
                  name={patient.name}
                  crm={patient.crm}
                  specialization={patient.specialization}
                />
              ))
          ) : (
            <p>
              Não existe medicos cadastrados. Cadastre um novo médico.
            </p>
          )}
        </PatStyle>
        
    </PatContainer>
  )
}