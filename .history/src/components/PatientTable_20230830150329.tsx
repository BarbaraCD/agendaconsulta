import { useState, useEffect } from 'react'
import { FlexDiv, StyledLink } from '../styles/InputContainer'
import { deletePatient, getPatient } from '../services/patient.services'
import {
  Container3,
  StyleList,
  StyledEditIcon,
} from '../styles/CreateContainer'
import { DeleteOutlined } from '@ant-design/icons'
import { Popconfirm } from 'antd'

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

  const confirmDelete = async (id: number) => {
    await deletePatient(id)
    await fetchPatients()
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
              <td>
                <span>
                  <Popconfirm
                    title="Delete Patient"
                    description="Tem certeza que deseja excluir esse paciente?"
                    onConfirm={() => confirmDelete(patient.id)}
                    onCancel={close}
                    okText="Yes"
                    cancelText="No"
                  >
                    <DeleteOutlined />
                  </Popconfirm>
                </span>
              </td>
            </StyleList>
          ))}
        </tbody>
      </table>

      <FlexDiv>
        <StyledLink to="/patients/new">Cadastrar Paciente</StyledLink>
      </FlexDiv>
    </Container3>
  )
}
