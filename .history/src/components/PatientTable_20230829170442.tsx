import { useState, useEffect } from 'react'
import { StyledLink } from '../styles/InputContainer'
import { getPatient } from '../services/patient.services'
import {
  Container3,
  StyleList,
  StyledEditIcon,
} from '../styles/CreateContainer'

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
            <StyleList key={patient.id}>
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
            </StyleList>
          ))}
        </tbody>
      </table>

      <ApFooter>
        <StyledLink to="/patients/new">Cadastrar Paciente</StyledLink>
      </ApFooter>
    </Container3>
  )
}
