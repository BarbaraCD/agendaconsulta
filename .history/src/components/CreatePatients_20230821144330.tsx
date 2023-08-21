import { useEffect, useState } from 'react'
import { Patients, PatientsProps } from './Patients'
import {
  createPatient,
  deletePatient,
  getPatient,
  updatePatient,
} from '../services/patient.services'
import { InputPatients } from './InputPatient'
import { SubmitButton } from './SubmitButton'
import { Container, Container2, Container3 } from '../styles/CreateContainer'
import { PatientsTypes } from '../model/patients'

export function CreatePatient() {
  const [patients, setPatients] = useState<PatientsProps[]>([])
  const [newPatient, setNewPatient] = useState<PatientsProps>({
    id: 0,
    name: '',
    age: 0,
    telephone: 0,
    email: '',
  })

  useEffect(() => {
    fetchPatient().catch((error) => {
      console.error('Error fetching Patients:', error)
    })
  }, [])

  async function fetchPatient() {
    try {
      const response: PatientsProps = await getPatient()
      setPatients(response)
    } catch (error) {
      console.error('Error fetching Patients:', error)
    }
  }

  async function createNewPatient() {
    if (
      newPatient?.name.trim() !== '' &&
      typeof newPatient?.age === 'number' &&
      newPatient?.age > 0 &&
      typeof newPatient?.telephone === 'number' &&
      newPatient?.telephone > 0 &&
      newPatient?.email.trim() !== ''
    ) {
      try {
        if (newPatient.id === 0) {
          await updatePatient(newPatient.id, {
            name: newPatient.name,
            age: newPatient.age,
            telephone: newPatient.telephone,
            email: newPatient.email,
            id: 0,
          })
          alert('Atualização realizada!')
        }
        await fetchPatient()
        setNewPatient({
          id: 0,
          name: '',
          age: 0,
          telephone: 0,
          email: '',
        })
        console.log('Paciente cadastrado/atualizado com sucesso!')
      } catch (error) {
        console.log('Erro ao cadastrar/atualizar paciente:', error)
      }
    } else {
      console.error('Por favor, preencha todos os campos corretamente.')
    }
  }

  const removePatient = async (id: number) => {
    await deletePatient(id)
    await fetchPatient()
  }

  const onClickEdit = (patients: PatientsTypes) => {
    setNewPatient(patients)
  }

  return (
    <Container>
      <Container2>
        <h3>Cadastrar um novo paciente</h3>
        <InputPatients />
      </Container2>

      <Container3>
        <h3>Pacientes já cadastrados</h3>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Telefone</th>
              <th>Email</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 &&
              patients.map((patients, index) => (
                <Patients
                  id={patients.id}
                  key={index + 1}
                  name={patients.name}
                  age={patients.age}
                  telephone={patients.telephone}
                  email={patients.email}
                  handleDelete={() => removePatient(patients.id)}
                  handleEdit={() => onClickEdit(patients)}
                />
              ))}
          </tbody>
        </table>
      </Container3>
    </Container>
  )
}
