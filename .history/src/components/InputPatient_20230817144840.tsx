import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useEffect, useState } from 'react'
import {
  InputContainer,
  StyledInput,
  SubmitButton,
} from '../styles/InputContainer'
import { getPatient, createPatient } from '../services/patient.services'

const createPatFormSchema = z.object({
  id: z.number(),
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
  age: z.coerce.number().min(12).max(100),
  telephone: z.string().refine((value) => /^\d{11}$/.test(value), {
    message: 'O número de telefone deve conter 11 digitos',
  }),
  email: z
    .string()
    .nonempty('O email é obrigatório')
    .email('Formato de email inválido')
    .toLowerCase(),
})

export type CreatePatFormData = z.infer<typeof createPatFormSchema>

export function InputPatients() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePatFormData>({
    resolver: zodResolver(createPatFormSchema),
    defaultValues: { name: '', age: 0, telephone: '', email: '' },
  })

  const [patients, setPatients] = useState<CreatePatFormData>()

  useEffect(() => {
    fetchPatients()
  }, [])

  async function fetchPatients() {
    try {
      const response: CreatePatFormData = await getPatient()
      setPatients(response)
    } catch (error) {
      console.error('Error fetching Patients:', error)
    }
  }

  async function createNewPatient(data: CreatePatFormData) {
    try {
      await createPatient(data)
      fetchPatients()
    } catch (error) {
      console.log('Erro ao cadastrar/atualizar paciente:', error)
    }
  }

  return (
    <InputContainer>
      <form onSubmit={handleSubmit(createNewPatient)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <StyledInput
            {...register('name')}
            type="text"
            placeholder="digite seu nome"
          />
          {errors.name?.message && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="age">Idade:</label>
          <StyledInput
            {...register('age')}
            type="number"
            maxLength={3}
            placeholder="digite sua idade"
          />
          {errors.age?.message && <span>{errors.age.message}</span>}
        </div>

        <div>
          <label htmlFor="telephone">Telefone:</label>
          <StyledInput
            {...register('telephone')}
            type="number"
            maxLength={11}
            placeholder="digite o telefone para contato"
          />
          {errors.telephone?.message && <span>{errors.telephone.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <StyledInput
            {...register('email')}
            type="text"
            placeholder="email@example.com"
          />
          {errors.email?.message && <span>{errors.email.message}</span>}
        </div>
        <SubmitButton type="submit">
          <p>Salvar</p>
        </SubmitButton>
      </form>
    </InputContainer>
  )
}
