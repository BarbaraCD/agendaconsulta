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
        <label>
          <p>Nome:</p>
          <input
            type="text"
            name="nome"
            value={props.name.toUpperCase()}
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
            value={props.crm.toFixed(5)}
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
            value={props.specialization.toUpperCase()}
            onChange={(event) => props.onSpecializationChange(event.target.value)}
            placeholder='Especialização médica'
          />
        </label>
    </InputContainer>
  )
}
