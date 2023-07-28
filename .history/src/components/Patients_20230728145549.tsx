import { StyleList } from '../styles/StyleList'

export type PatientsProps = {
  id: number
  name: string
  age: number
  telephone: number
  email: string
}

export function Patients(props: PatientsProps){

  return(
    <StyleList>
      <table>
      <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Telefone</th>
            <th>Email</th>
          </tr>
        </thead>
      </table>
      <table>
        <tbody>
            <td><span>{props.name}</span></td>
            <td><span>{props.age}</span></td>
            <td><span>{props.telephone}</span></td>
            <td><span>{props.email}</span></td>
        </tbody>
      </table>
    </StyleList>
  )
}
