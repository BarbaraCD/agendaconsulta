import { styled } from "styled-components"

const StyleDoctors = styled.div`
  background: ${(props) => props.theme.colors.white};
`

export type DoctorsProps = {
  name: string
  crm: number
  specialization: string
}

export function Doctors(props: DoctorsProps){

  return(
    <StyleDoctors>
      <span>{props.crm}</span>
      <span>{props.name}</span>
      <span>{props.specialization}</span>
    </StyleDoctors>
  )
}
