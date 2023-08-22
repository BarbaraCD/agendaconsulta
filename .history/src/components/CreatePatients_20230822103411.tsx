import { useState, useEffect } from 'react'
import { StyledLink } from '../styles/Appointments'
import { StyledEditIcon } from '../styles/StyleList'
import { getPatient } from '../services/patient.services'
import { Container3 } from '../styles/CreateContainer'
import { PatientsTypes } from '../model/patients'

export type PatientsProps = {
  id: number
  name: string
  age: number
  telephone: number
  email: string
  handleEdit?: (patient: PatientsProps) => void
}

export function PatientTable() {
  const [patients, setPatients] = useState<PatientsProps[]>([])
  const [newPatient, setNewPatient] = useState<PatientsProps | null>(null)

  useEffect(() => {
    fetchPatients().catch((error) => {
      console.error('Error fetching Patients:', error)
    })
  }, [])

  async function fetchPatients() {
    try {
      const response: PatientsProps[] = await getPatient()
      setPatients(response)
    } catch (error) {
      console.error('Error fetching Patients:', error)
    }
  }

  const handleEdit = (patient: PatientsTypes) => {
    setNewPatient(patient)
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
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>
                <span>{patient.name}</span>
              </td>
              <td>
                <span>{patient.age}</span>
              </td>
              <td>
                <span>{patient.telephone}</span>
              </td>
              <td>
                <span>{patient.email}</span>
              </td>
              <td>
                <span>
                  <StyledLink to={`/patients/${patient.id}/edit`}>
                    <StyledEditIcon />
                  </StyledLink>
                </span>
              </td>
              <td>
                <button onClick={() => handleEdit(patient)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {newPatient && (
        <div>
          <h4>Edit Patient</h4>
        </div>
      )}
    </Container3>
  )
}
