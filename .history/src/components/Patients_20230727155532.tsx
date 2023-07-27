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
      <span><p>Nome:</p>{props.name}</span>
      <span><p>Idade:</p>{props.age}</span>
      <span><p>Telefone:</p>{props.telephone}</span>
      <span><p>Email:</p>{props.email}</span>
    </StylePatients>
  )
}
