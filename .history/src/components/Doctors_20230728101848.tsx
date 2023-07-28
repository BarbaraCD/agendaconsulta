import { StyleList } from '../styles/StyleList'

export type DoctorsProps = {
  id: number
  name: string
  crm: number
  specialization: string
}

export function Doctors(props: DoctorsProps){

  return(
    <StyleList>
      <label>
        <p>CRM: </p>
        <span>{props.crm}</span>
      </label>
      <label>
        <p>Nome: </p>
        <span>{props.name}</span>
      </label>
      <label>
        <p>Especialização: </p>
        <span>{props.specialization}</span>
      </label>

    </StyleList>
  )
}
