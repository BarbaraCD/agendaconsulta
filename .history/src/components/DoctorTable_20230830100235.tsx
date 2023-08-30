import { useEffect, useState } from 'react'
import { deleteDoctor, getDoctors } from '../services/doctor.services'
import {
  Container3,
  StyleList,
  StyledEditIcon,
} from '../styles/CreateContainer'
import { FlexDiv, StyledDelete, StyledLink } from '../styles/InputContainer'
import { DeleteOutlined, CloseSquareOutlined } from '@ant-design/icons'
import { StyledQuestion } from '../styles/Appointments'

export type DoctorsProps = {
  id: number
  name: string
  crm: number
  specialization: string
  handleEdit?: () => void
}

export function DoctorTable() {
  const [doctors, setDoctors] = useState<DoctorsProps[]>([])
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  useEffect(() => {
    fetchDoctor().catch((error) => {
      console.error('Error fetching doctors:', error)
    })
  }, [])

  async function fetchDoctor() {
    try {
      const response: DoctorsProps[] = await getDoctors()
      setDoctors(response)
    } catch (error) {
      console.error('Error fetching Doctors:', error)
    }
  }

  const handleDeleteDoctor = (id: number) => {
    setShowDeleteConfirmation(true)
  }

  const confirmDelete = async (id: number) => {
    await deleteDoctor(id)
    await fetchDoctor()
    setShowDeleteConfirmation(false)
  }

  const cancelDelete = () => {
    setShowDeleteConfirmation(false)
  }

  return (
    <Container3>
      <h3>Medicos já cadastrados</h3>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CRM</th>
            <th>Especialização</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <StyleList key={doctor.id}>
              <td>
                <span>{doctor.name}</span>
              </td>
              <td>
                <span>{doctor.crm}</span>
              </td>
              <td>
                <span>{doctor.specialization}</span>
              </td>
              <td>
                <span>
                  <StyledLink to={`/doctors/${doctor.id}/edit`}>
                    <StyledEditIcon />
                  </StyledLink>
                </span>
              </td>
              <td>
                <span>
                  <StyledLink to={`/doctors/${doctor.id}/edit`}>
                    <DeleteOutlined />
                  </StyledLink>
                </span>
              </td>
            </StyleList>
          ))}
        </tbody>
      </table>

      {showDeleteConfirmation && (
        <StyledQuestion>
          <p>Tem certeza que deseja excluir?</p>
          <button className="button-sim" onClick={() => confirmDelete()}>
            <DeleteOutlined />
            Excluir
          </button>
          <button className="button-nao" onClick={() => cancelDelete()}>
            <CloseSquareOutlined />
            Não
          </button>
        </StyledQuestion>
      )}

      <FlexDiv>
        <StyledLink to="/doctors/new">Cadastrar Médico</StyledLink>
      </FlexDiv>
    </Container3>
  )
}
