
import styled from "styled-components"

const PatientContainer = styled.div`
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};

  h3 {
    font-size: ${(props) => props.theme.size.xl};
    background-color: ${(props) => props.theme.colors[100]};
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 10px;
  }

  label {
    display: flex;
    margin-right: 4px;
  }

  p{
    font-size: ${(props) => props.theme.size.md};
    font-weight: 400;
  }

  input {
    width: 80vw;
    margin-left: 8px;
  }
`

interface InputPatientsProps{
  name: string
  age: number
  telephone: number
  email: string
  onNameChange: (value: string) => void
  onAgeChange: (value: number) => void
  onTelephoneChange: (value: number) => void
  onEmailChange: (value: string) => void
}

export function InputPatients(props: InputPatientsProps) {
  return (
    <PatientContainer>
      <h3>Cadastrar Pacientes</h3>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={props.name}
            onChange={(event) => props.onNameChange(event.target.value)}
            placeholder='Gercina da Silva'
          />
        </label>
        <br />
        <label>
          Idade:
          <input
            type="text"
            name="idade"
            value={props.age}
            onChange={(event) => props.onAgeChange(Number(event.target.value))}
            placeholder='idade'
          />
        </label>
        <br />
        <label>
          Telefone:
          <input 
            type="text"
            name="telefone"
            value={props.telephone}
            onChange={(event) => props.onTelephoneChange(Number(event.target.value))}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={props.email}
            onChange={(event) => props.onEmailChange(event.target.value)}
            placeholder='digiteseuemail@gmail.com'
          />
        </label>
    </PatientContainer>
  );
}
