import { useEffect, useState } from 'react'
import { Patients, PatientsProps } from './Patients'
import { createPatient, getPatient } from '../services/patient.services'
import { InputPatients } from './InputPatient'
import { SubmitButton } from './SubmitButton'
import { Container, Container2 }  from '../styles/CreateContainer'

interface CreatePatientProps {}

export function CreatePatient(props: CreatePatientProps){

  const [patients, setPatients] = useState<PatientsProps[]>([])
  const [newPatient, setNewPatient] = useState<PatientsProps>({
    id: 0,
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
    try {
      const response: PatientsProps[] = await getPatient();
      setPatients(response);
    } catch (error) {
      console.error('Error fetching Patients:', error);
    }
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
              id: 0,
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
    <Container>
      <InputPatients
        name={newPatient.name}
        age={newPatient.age}
        telephone={newPatient.telephone}
        email={newPatient.email}
        onNameChange={(value) => setNewPatient({ ...newPatient, name: value })}
        onAgeChange={(value) => setNewPatient({ ...newPatient, age: value })}
        onTelephoneChange={(value) => setNewPatient({ ...newPatient, telephone: value})}
        onEmailChange={(value) =>
          setNewPatient({ ...newPatient, email: value })
        }
      />

        <SubmitButton onClick={createNewPatient}/>
        <Container2>
          <h3>Pacientes já cadastrados</h3>
          {patients.length > 0 && (
            patients.map((patients) => (
              <Patients
                key={patients.id}
                name={patients.name}
                age={patients.age}
                telephone={patients.telephone}
                email={patients.email}
                id={patients.id}
              />
            ))
          )}
        </Container2>
        
    </Container>
  )
}