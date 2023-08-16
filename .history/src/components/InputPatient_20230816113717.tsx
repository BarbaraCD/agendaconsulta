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
  telephone: z.number().min(11, 'O numero de telefone é obrigatório'),
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
  })

  function createPatienttest(data: CreatePatFormData) {
    setOutput(JSON.stringify(data))
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
          <label htmlFor="name">Idade:</label>
          <StyledInput
            {...register('age')}
            type="number"
            placeholder="digite sua idade"
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div>
          <label htmlFor="name">Telefone:</label>
          <StyledInput
            {...register('telephone')}
            type="number"
            placeholder="digite o telefone para contato"
          />
          {errors.telephone && <span>{errors.telephone.message}</span>}
        </div>

        <div>
          <label htmlFor="name">Email:</label>
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
    </InputContainer>
  )
}
