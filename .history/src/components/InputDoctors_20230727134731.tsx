import { InputContainer } from "../styles/InputContainer"


interface InputDoctorsProps{
  name: string
  crm: number
  specialization: string
  onNameChange: (value: string) => void
  onCrmChange: (value: number) => void
  onSpecializationChange: (value: string) => void
}

export function InputDoctors(props: InputDoctorsProps) {
  return (
    <InputContainer>
      <h3>Cadastrar um novo médico</h3>
        <label>
          <p>Nome:</p>
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
          <p>CRM:</p>
          <input
            type="text"
            name="crm"
            value={props.crm}
            onChange={(event) => props.onCrmChange(Number(event.target.value))}
            placeholder='Número do CRM'
          />
        </label>
        <br />
        <label>
          <p>Especialização:</p>
          <input
            type="text"
            name="specialization"
            value={props.specialization}
            onChange={(event) => props.onSpecializationChange(event.target.value)}
            placeholder='Especialização médica'
          />
        </label>
    </InputContainer>
  )
}
