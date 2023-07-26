import { styled } from "styled-components"

const StyledDoctors = styled.div`
  background: ${(props) => props.theme.colors.white};
`

export type DoctorsProps = {
  name: string
  crm: string
  specialization: string
}

export function Doctors({ name, crm, specialization }: DoctorsProps){

  return(
    <StyledDoctors>
      <span>{crm}</span>
      <span>{name}</span>
      <span>{specialization}</span>
    </StyledDoctors>
  )
}
