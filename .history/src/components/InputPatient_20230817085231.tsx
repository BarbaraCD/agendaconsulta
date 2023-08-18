import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useState } from 'react'
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
  age: z
    .string()
    .nonempty('Idade é obrigatória')
    .refine((value) => /^\d{3}$/.test(value), {
      message: 'Selecione uma idade entre 0 e 100',
    }),
  telephone: z.string().refine((value) => /^\d{11}$/.test(value), {
    message: 'O número de telefone deve conter 11 digitos',
  }),
  email: z
    .string()
    .nonempty('O email é obrigatório')
    .email('Formato de email inválido')
    .toLowerCase(),
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
    defaultValues: { name: '', age: '', telephone: '', email: '' },
  })

  function createPatienttest(data: CreatePatFormData) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <InputContainer>
      <form onSubmit={handleSubmit(createPatienttest)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <StyledInput
            {...register('name')}
            type="text"
            placeholder="digite seu nome"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="age">Idade:</label>
          <StyledInput
            {...register('age')}
            type="number"
            maxLength={3}
            placeholder="digite sua idade"
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div>
          <label htmlFor="telephone">Telefone:</label>
          <StyledInput
            {...register('telephone')}
            type="number"
            maxLength={11}
            placeholder="digite o telefone para contato"
          />
          {errors.telephone && <span>{errors.telephone.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <StyledInput
            {...register('email')}
            type="text"
            placeholder="email@example.com"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <SubmitButton type="submit">
          <p>Salvar</p>
        </SubmitButton>
      </form>
      <pre>{output}</pre>
    </InputContainer>
  )
}
