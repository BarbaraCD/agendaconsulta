
import styled from "styled-components"

const PatientContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};

  span {
    font-size: ${(props) => props.theme.size.xl};
    background-color: ${(props) => props.theme.colors[100]};
  }
`;

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
      <span>Cadastrar Pacientes</span>
      <form onSubmit={(event) => event.preventDefault()}>
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
          CRM:
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
          Telefone
          <input 
            type="text"
            name="telefone"
            value={props.telephone}
            onChange={(event) => props.onTelephoneChange(Number(event.target.value))}
          />
        </label>
        <br />
        <label>
          Especialização:
          <input
            type="text"
            name="email"
            value={props.email}
            onChange={(event) => props.onEmailChange(event.target.value)}
            placeholder='digiteseuemail@gmail.com'
          />
        </label>
      </form>
    </PatientContainer>
  );
}
