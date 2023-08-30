import { useEffect, useState } from 'react'
import { deleteDoctor, getDoctors } from '../services/doctor.services'
import {
  Container3,
  StyleList,
  StyledEditIcon,
} from '../styles/CreateContainer'
import { FlexDiv, StyledDelete, StyledLink } from '../styles/InputContainer'
import { CloseSquareOutlined, DeleteOutlined, DeleteOutlined } from '@ant-design/icons'
import { StyledModal, StyledQuestion } from '../styles/Appointments'

export type DoctorsProps = {
  id: number
  name: string
  crm: number
  specialization: string
  handleEdit?: () => void
  handleDelete?: () => void
}

export function DoctorTable() {
  const [doctors, setDoctors] = useState<DoctorsProps[]>([])
  const [modalVisible, setModalVisible] = useState(false)

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

  const closeModal = () => {
    setModalVisible(false)
  }

  const handleDeleteDoctor = () => {
    setModalVisible(true)
  }

  const confirmDelete = async (id: number) => {
    await deleteDoctor(id)
    await fetchDoctor()
    closeModal()
  }

  const cancelDelete = () => {
    closeModal()
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
                  <StyledDelete>
                    <DeleteOutlined onClick={() => handleDeleteDoctor()} />
                  </StyledDelete>
                </span>
              </td>
            </StyleList>
          <StyledModal
            title={<p>Tem certeza que deseja excluir?</p>}
            open={modalVisible}
            onCancel={closeModal}
            footer={null}
          >
            <StyledQuestion>
              <button
                className="button-sim"
                onClick={() => confirmDelete(doctor.id)}
              >
                <DeleteOutlined />
                Excluir
              </button>
              <button className="button-nao" onClick={() => cancelDelete()}>
                <CloseSquareOutlined />
                Não
              </button>
            </StyledQuestion>
          </StyledModal>
          ))}
        </tbody>
      </table>

      <FlexDiv>
        <StyledLink to="/doctors/new">Cadastrar Médico</StyledLink>
      </FlexDiv>
    </Container3>
  )
}
