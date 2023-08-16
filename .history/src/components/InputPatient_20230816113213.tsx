import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  InputContainer,
  StyledInput,
  SubmitButton,
} from '../styles/InputContainer'

const createPatFormSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  age: z.number().min(3, 'A idade é obrigatória'),
  telephone: z.number().min(11, "O numero de telefone é obrigatório"),
  email: z.string()
    .nonempty('O email é obrigatório')
    .email('Formato de email inválido')
    .toLowerCase(),,
})

type CreatePatFormData = z.infer<typeof createPatFormSchema>

export function InputPatients() {
  const [output, setOutput] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePatFormData>({
    resolver: zodResolver(createPatFormSchema),
  })

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
        <p>Idade:</p>
        <StyledInput
          type="text"
          name="idade"
          value={props.age}
          onChange={handleAgeChange}
          placeholder="idade"
        />
      </label>
      <br />
      <label>
        <p>Telefone:</p>
        <StyledInput
          type="text"
          name="telefone"
          value={props.telephone}
          onChange={handleTelephoneChange}
        />
      </label>
      <br />
      <label>
        <p>Email:</p>
        <StyledInput
          type="text"
          name="email"
          value={props.email}
          onChange={(event) => props.onEmailChange(event.target.value)}
          placeholder="digiteseuemail@gmail.com"
        />
      </label>
    </InputContainer>
  )
}
