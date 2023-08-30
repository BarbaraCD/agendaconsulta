import { useEffect, useState } from 'react'
import { deleteDoctor, getDoctors } from '../services/doctor.services'
import {
  Container3,
  StyleList,
  StyledEditIcon,
} from '../styles/CreateContainer'
import { FlexDiv, StyledDelete, StyledLink } from '../styles/InputContainer'
import { DeleteOutlined } from '@ant-design/icons'
import { Popconfirm } from 'antd'

export type DoctorsProps = {
  id: number
  name: string
  crm: number
  specialization: string
}

export function DoctorTable() {
  const [doctors, setDoctors] = useState<DoctorsProps[]>([])

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

  const confirmDelete = async (id: number) => {
    await deleteDoctor(id)
    await fetchDoctor()
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
                    <Popconfirm
                      title="Delete Doctor"
                      description="Tem certeza que deseja excluir esse médico?"
                      onConfirm={() => confirmDelete(doctor.id)}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteOutlined />
                    </Popconfirm>
                  </StyledDelete>
                </span>
              </td>
            </StyleList>
          ))}
        </tbody>
      </table>

      <FlexDiv>
        <StyledLink to="/doctors/new">Cadastrar Médico</StyledLink>
      </FlexDiv>
    </Container3>
  )
}
