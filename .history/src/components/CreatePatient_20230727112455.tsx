import { useEffect, useState } from 'react'
import { Patients, PatientsProps } from './Patients'
import { createPatient, getPatient } from '../services/patient.services'
import { InputPatients } from './InputPatient'
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
    const response: PatientsProps[] = await getPatient();
    const fetchedPatient = response;
    setPatients(fetchedPatient);
  }

  async function createNewPatient(){
    if(
      newPatient?.name.trim() !== '' && 
      typeof newPatient?.age === 'number' && newPatient?.age > 0 && 
      newPatient?.email.trim() !== ''
      ){
        try {
          await createPatient(newPatient.name, newPatient.age, newPatient.telephone, newPatient.email);
          await fetchPatient();
            setNewPatient({
              name: '',
              age: 0,
              telephone: 0,
              email: ''
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
        age={newPatient.age}
        specialization={newPatient.email}
        onNameChange={(value) => setNewPatient({ ...newPatient, name: value })}
        onAgeChange={(value) => setNewPatient({ ...newPatient, age: value })}
        onTelephoneChange={(value) => setNewPatient({ ...newPatient, telephone: value})}
        onEmailChange={(value) =>
          setNewPatient({ ...newPatient, email: value })
        }
      />

        <SubmitButton onClick={createNewPatient}/>

        <PatStyle>
          <h3>Medicos já cadastrados</h3>
          {patient.length > 0 ? (
            patient
              .map((patient, index) => (
                <Patients
                  key={patient.id}
                  id={index + 1}
                  name={patient.name}
                  age={patient.age}
                  telephone={patient.telephone}
                  email={patient.email}
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