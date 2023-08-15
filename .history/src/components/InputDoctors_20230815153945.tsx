import { z } from 'zod'
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

const createDocFormSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é orbigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  crm: z.number().nonempty('O CRM é obrigatório').min(5),
  specialization: z.string(),
})

export function InputDoctors(props: InputDoctorsProps) {
  const { register } = useForm()

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
