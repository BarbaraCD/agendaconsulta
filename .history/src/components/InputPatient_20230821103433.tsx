import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useEffect, useState } from 'react'
import {
  InputContainer,
  StyledInput,
  SubmitButton,
} from '../styles/InputContainer'
import { getPatient, createPatient } from '../services/patient.services'

const patientSchema = z.object({
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
  telephone: z
    .string()
    .min(11, 'Telefone é obrigatório')
    .max(11, 'Telefone deve conter 11 digitos'),
  email: z
    .string()
    .nonempty('O email é obrigatório')
    .email('Formato de email inválido')
    .toLowerCase(),
})

export type PatientSchemaType = z.infer<typeof patientSchema>

export function InputPatients() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientSchemaType>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      name: '',
      age: null || undefined,
      telephone: null || undefined,
      email: '',
    },
  })

  const [patients, setPatients] = useState<PatientSchemaType>()

  useEffect(() => {
    fetchPatients()
  }, [])

  async function fetchPatients() {
    try {
      const response: PatientSchemaType = await getPatient()
      setPatients(response)
    } catch (error) {
      console.error('Error fetching Patients:', error)
    }
  }

  async function createNewPatient(data: PatientSchemaType) {
    try {
      await createPatient(data)
      fetchPatients()
      console.log(patients)
    } catch (error) {
      console.log('Erro ao cadastrar/atualizar paciente:', error)
    }
  }

  const onSubmit: SubmitHandler<PatientSchemaType> = (data) => console.log(data)

  return (
    <InputContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <StyledInput
            {...register('name')}
            type="text"
            id="name"
            placeholder="digite seu nome"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="age">Idade:</label>
          <StyledInput
            {...register('age')}
            type="number"
            id="age"
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
            id="telephone"
            placeholder="digite o telefone para contato"
          />
          {errors.telephone && <span>{errors.telephone.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <StyledInput
            {...register('email')}
            type="text"
            id="email"
            placeholder="email@example.com"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <SubmitButton type="submit" disabled={isSubmitting}>
          <p>Salvar</p>
        </SubmitButton>
      </form>
    </InputContainer>
  )
}
