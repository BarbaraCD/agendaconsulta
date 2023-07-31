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
      {props.name}
      {props.age}
      {props.telephone}
      {props.email}
    </StyleList>
  )
}
