import { InputContainer } from '../styles/InputContainer'

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
    <InputContainer>
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
    </InputContainer>
  );
}
