import { useEffect, useState } from 'react'
import { Patients, PatientsProps } from './Patients'
import {
  createPatient,
  deletePatient,
  getPatient,
  updatePatient,
} from '../services/patient.services'
import { InputPatients } from './InputPatient'
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
        <InputPatients
          name={newPatient.name}
          age={newPatient.age}
          telephone={newPatient.telephone}
          email={newPatient.email}
          id={newPatient.id}
          onNameChange={(value) =>
            setNewPatient({ ...newPatient, name: value })
          }
          onAgeChange={(value) => setNewPatient({ ...newPatient, age: value })}
          onTelephoneChange={(value) =>
            setNewPatient({ ...newPatient, telephone: value })
          }
          onEmailChange={(value) =>
            setNewPatient({ ...newPatient, email: value })
          }
        />

        {/* <SubmitButton onClick={createNewPatient} /> */}
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
