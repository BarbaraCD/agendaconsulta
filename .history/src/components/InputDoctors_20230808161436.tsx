import { useState } from "react"
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
  const [crm, setCrm] = useState<number | ''>(props.crm);

  const handleCrmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = value.replace(/\D/g, '');
    const limitedValue = numericValue.slice(0, 5);
    setCrm(limitedValue === '' ? '' : Number(limitedValue));
    props.onCrmChange(Number(limitedValue));
  }

  return (
    <InputContainer>
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
            onChange={handleCrmChange}
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
