import { styled } from "styled-components"

const StyleDoctors = styled.div`
  background: ${(props) => props.theme.colors.white};

  label{
    display: flex;
    margin-right: 4px;
  }

  p{
    font-size: ${(props) => props.theme.size.md};
    font-weight: 500;
  }
  span{
    font-size: ${(props) => props.theme.size.md};
    font-weight: 500
  }
`

export type DoctorsProps = {
  id: number
  name: string
  crm: number
  specialization: string
}

export function Doctors(props: DoctorsProps){

  return(
    <StyleDoctors>
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

    </StyleDoctors>
  )
}
