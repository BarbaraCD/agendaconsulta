/* eslint-disable react-hooks/exhaustive-deps */
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useEffect, useState } from 'react'
import {
  FlexDiv,
  InputContainer,
  MessageError,
  MessageSaved,
  StyledInput,
  StyledValidation,
  SubmitButton,
  StyledLink,
} from '../styles/InputContainer'
import {
  createPatient,
  updatePatient,
  getPatientById,
} from '../services/patient.services'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'

const patientSchema = z.object({
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
  age: z.coerce.number().min(12, 'Idade obrigatória').max(120),
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
    reset,
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

  const navigate = useNavigate()
  const { id } = useParams()
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    fetchPatients()
  }, [])

  async function fetchPatients() {
    if (!id) return
    try {
      const response = await getPatientById(Number(id))
      reset(response as unknown as PatientSchemaType)
    } catch (error) {
      console.error('Error fetching Patients:', error)
    }
  }

  async function createNewPatient(data: PatientSchemaType) {
    try {
      if (id) {
        await updatePatient(Number(id), data)
        navigate(-1)
      } else {
        await createPatient(data)
      }
      setSuccessMessage('Paciente salvo com sucesso!')
      setTimeout(() => {
        setSuccessMessage(null)
      }, 2000)
      reset()
    } catch (error) {
      setErrorMessage('Erro ao cadastrar/atualizar paciente.')
    }
  }

  return (
    <InputContainer>
      {successMessage && <MessageSaved>{successMessage}</MessageSaved>}
      {errorMessage && <MessageError>{errorMessage}</MessageError>}
      <h3>Cadastre um paciente</h3>
      <FlexDiv>
        <StyledLink to="/patients/list">
          <ArrowLeftOutlined />
        </StyledLink>
        <SubmitButton type="submit" disabled={isSubmitting}>
          Salvar
        </SubmitButton>
      </FlexDiv>

      <form onSubmit={handleSubmit(createNewPatient)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <StyledInput
            {...register('name')}
            type="text"
            name="name"
            id="name"
            placeholder="nome do paciente"
            autoComplete="off"
          />
          {errors.name && (
            <StyledValidation>{errors.name.message}</StyledValidation>
          )}
        </div>

        <div>
          <label htmlFor="age">Idade:</label>
          <StyledInput
            {...register('age')}
            type="number"
            name="age"
            id="age"
            maxLength={3}
            placeholder="idade do paciente"
            autoComplete="off"
          />
          {errors.age && (
            <StyledValidation>{errors.age.message}</StyledValidation>
          )}
        </div>

        <div>
          <label htmlFor="telephone">Telefone:</label>
          <StyledInput
            {...register('telephone')}
            type="number"
            name="telephone"
            id="telephone"
            placeholder="telefone para contato"
            autoComplete="off"
          />
          {errors.telephone && (
            <StyledValidation>{errors.telephone.message}</StyledValidation>
          )}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <StyledInput
            {...register('email')}
            type="text"
            id="email"
            name="email"
            placeholder="email@example.com"
            autoComplete="off"
          />
          {errors.email && (
            <StyledValidation>{errors.email.message}</StyledValidation>
          )}
        </div>
      </form>
    </InputContainer>
  )
}
