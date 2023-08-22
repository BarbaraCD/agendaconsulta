import { useEffect, useState } from 'react'
import { getDoctors } from '../services/doctor.services'
import { Container3 } from '../styles/CreateContainer'
import { DoctorsTypes } from '../model/doctors'
import { StyledLink } from '../styles/Appointments'
import { StyledEditIcon } from '../styles/StyleList'

export type DoctorsProps = {
  id: number
  name: string
  crm: number
  specialization: string
  handleEdit?: () => void
}

export function DoctorTable() {
  const [doctors, setDoctors] = useState<DoctorsProps[]>([])
  const [newDoctor, setNewDoctor] = useState<DoctorsProps>({
    id: 0,
    name: '',
    specialization: '',
    crm: 0,
  })

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

  const handleEdit = (doctors: DoctorsTypes) => {
    setNewDoctor(doctors)
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
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
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
                  <StyledLink to={`/patients/${doctor.id}/edit`}>
                    <StyledEditIcon />
                  </StyledLink>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container3>
  )
}
