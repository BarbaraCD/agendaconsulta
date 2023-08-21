import { useState } from 'react'
import { Patients, PatientsProps } from './Patients'
import { Container3 } from '../styles/CreateContainer'

export function CreatePatient() {
  const [patients, setPatients] = useState<PatientsProps[]>([])

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
                handleEdit={() => {
                  setPatients.id
                }}
              />
            ))}
        </tbody>
      </table>
    </Container3>
  )
}
