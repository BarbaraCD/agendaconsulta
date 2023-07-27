import { styled } from "styled-components"

const StylePatients = styled.div`
  background: ${(props) => props.theme.colors.white};
`

export type PatientsProps = {
  id: number
  name: string
  age: number
  telephone: number
  email: string
}

export function Patients(props: PatientsProps){

  return(
    <StylePatients>
      <span>{props.name}</span>
      <span>{props.age}</span>
      <span>{props.telephone}</span>
      <span>{props.email}</span>
    </StylePatients>
  )
}
