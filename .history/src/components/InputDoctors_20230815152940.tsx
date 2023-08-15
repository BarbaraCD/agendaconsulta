import { zodResolver } from '@hookform/resolvers/zod'
import { InputContainer, StyledInput } from '../styles/InputContainer'
import { useForm } from 'react-hook-form'

interface InputDoctorsProps {
  name: string
  crm: number
  specialization: string
  id: number
  onNameChange: (value: string) => void
  onCrmChange: (value: number) => void
  onSpecializationChange: (value: string) => void
}

export function InputDoctors(props: InputDoctorsProps) {
  const { register } = useForm()
  const handleCrmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const numericValue = value.replace(/\D/g, '')
    const limitedValue = numericValue.slice(0, 5)
    props.onCrmChange(Number(limitedValue))
  }

  return (
    <InputContainer>
      <label>
        <p>Nome:</p>
        <StyledInput
          type="text"
          name="nome"
          value={props.name}
          onChange={(event) => props.onNameChange(event.target.value)}
          placeholder="Gercina da Silva"
        />
      </label>
      <br />
      <label>
        <p>CRM:</p>
        <StyledInput
          type="text"
          name="crm"
          value={props.crm}
          onChange={handleCrmChange}
          placeholder="Número do CRM"
        />
      </label>
      <br />
      <label>
        <p>Especialização:</p>
        <StyledInput
          type="text"
          name="specialization"
          value={props.specialization}
          onChange={(event) => props.onSpecializationChange(event.target.value)}
          placeholder="Especialização médica"
        />
      </label>
    </InputContainer>
  )
}
