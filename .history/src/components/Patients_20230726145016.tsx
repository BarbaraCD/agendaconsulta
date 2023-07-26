import { styled } from "styled-components"

const StylePatients = styled.div`
  background: ${(props) => props.theme.colors.white};
`

export type PatientsProps = {
  name: string
  age: number
  telephone: number
  email: string
}

export function Patients({ name, crm, specialization }: PatientsProps){

  return(
    <StylePatients>
      <span>{crm}</span>
      <span>{name}</span>
      <span>{specialization}</span>
    </StylePatients>
  )
}
