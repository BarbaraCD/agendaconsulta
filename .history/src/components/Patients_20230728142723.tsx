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
            <th>Atributo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p>Nome:</p></td>
            <td><span>{props.name}</span></td>
          </tr>
          <tr>
            <td><p>Idade:</p></td>
            <td><span>{props.age}</span></td>
          </tr>
          <tr>
            <td><p>Telefone:</p></td>
            <td><span>{props.telephone}</span></td>
          </tr>
          <tr>
            <td><p>Email:</p></td>
            <td><span>{props.email}</span></td>
          </tr>
        </tbody>
      </table>
    </StyleList>
  )
}
