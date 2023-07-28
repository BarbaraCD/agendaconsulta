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
            <tr>Nome</tr>
            <tr>Idade</tr>
            <tr>Telefone</tr>
            <tr>Email</tr>
        </thead>
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
