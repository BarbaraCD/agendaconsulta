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
      {/* <table> */}
        {/* <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Telefone</th>
            <th>Email</th>
          </tr>
        </thead> */}
        {/* <tbody> */}
            {props.name}
            {props.age}
            {props.telephone}
            {props.email}
        {/* </tbody>
      </table> */}
    </StyleList>
  )
}
