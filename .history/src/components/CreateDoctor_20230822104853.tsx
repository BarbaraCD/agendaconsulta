import { useEffect, useState } from 'react'
import { Doctors, DoctorsProps } from './Doctors'
import {
  createDoctor,
  deleteDoctor,
  getDoctors,
  updateDoctor,
} from '../services/doctor.services'
import { InputDoctors } from './InputDoctors'
import { SubmitButton } from './SubmitButton'
import { Container, Container2, Container3 } from '../styles/CreateContainer'
import { DoctorsTypes } from '../model/doctors'

export type DoctorsProps = {
  id: number
  name: string
  crm: number
  specialization: string
  handleEdit?: () => void
}

export function DoctorTable() {
  const [doctor, setDoctors] = useState<DoctorsProps[]>([])
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

  const onClickEdit = (doctors: DoctorsTypes) => {
    setNewDoctor(doctors)
  }

  return (
    <Container>
      <Container3>
        <h3>Medicos já cadastrados</h3>
        <table>
          <thead>
            <tr>
              <th>CRM</th>
              <th>Nome</th>
              <th>Especialização</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {doctor.length > 0 &&
              doctor.map((doctor, index) => (
                <Doctors
                  key={doctor.id}
                  id={index + 1}
                  crm={doctor.crm}
                  name={doctor.name}
                  specialization={doctor.specialization}
                  handleDelete={() => removeDoctor(doctor.id)}
                  handleEdit={() => onClickEdit(doctor)}
                />
              ))}
          </tbody>
        </table>
      </Container3>
    </Container>
  )
}
