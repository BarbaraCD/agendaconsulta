import { useEffect, useState } from 'react'
import { Patients, PatientsProps } from './Patients'
import { deletePatient, getPatient } from '../services/patient.services'
import { Container3 } from '../styles/CreateContainer'
import { PatientsTypes } from '../model/patients'
import { StyledLink } from '../styles/Appointments'

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
      const response: PatientsProps[] = await getPatient()
      setPatients(response)
    } catch (error) {
      console.error('Error fetching Patients:', error)
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
                handleEdit={() =>
                  onClickEdit(
                    <StyledLink to={`/patients/${id}/edit`}>edit</StyledLink>,
                  )
                }
              />
            ))}
        </tbody>
      </table>
    </Container3>
  )
}
