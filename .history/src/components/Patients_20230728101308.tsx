import { styled } from "styled-components"

const StylePatients = styled.div`
  background: ${(props) => props.theme.colors.white};
  

  label{
    display: flex;
    margin-right: 4px;
  }

  p{
    font-size: ${(props) => props.theme.size.md};
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
  }
  span{
    font-size: ${(props) => props.theme.size.md};
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
  }
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
      <label>
        <p>Nome: </p>
        <span>{props.name}</span>
      </label>
      <label>
        <p>Idade: </p>
        <span>{props.age}</span>
      </label>
      <label>
        <p>Telefone: </p>
        <span>{props.telephone}</span>
      </label>
      <label>
        <p>Email: </p>
        <span>{props.email}</span>
      </label>
    </StylePatients>
  )
}
