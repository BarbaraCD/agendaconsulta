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
  SubmitButton,
} from '../styles/InputContainer'
import {
  getPatient,
  createPatient,
  updatePatient,
} from '../services/patient.services'
import { StyledLink } from '../styles/Appointments'
import { PatientsProps } from './PatientTable'

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

  const [patients, setPatients] = useState<PatientsProps>()
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    fetchPatients()
  }, [])

  async function fetchPatients() {
    try {
      const response: PatientsProps[] = await getPatient()
      setPatients(response)
    } catch (error) {
      console.error('Error fetching Patients:', error)
    }
  }

  async function createNewPatient(data: PatientSchemaType) {
    if (patients?.id === 0) {
      try {
        await createPatient(data)
        fetchPatients()
        setSuccessMessage('Paciente salvo com sucesso!')
        setErrorMessage(null)
      } catch (error) {
        setErrorMessage('Erro ao cadastrar paciente.')
        setSuccessMessage(null)
        console.log('Erro ao cadastrar paciente:', error)
      }
    } else {
      try {
        await updatePatient(patients?.id, data)
        fetchPatients()
        setSuccessMessage('Paciente atualizado com sucesso!')
        setErrorMessage(null)
      } catch (error) {
        setErrorMessage('Erro ao atualizar paciente.')
        setSuccessMessage(null)
        console.log('Erro ao atualizar paciente:', error)
      }
    }
  }

  return (
    <InputContainer>
      {successMessage && <MessageSaved>{successMessage}</MessageSaved>}
      {errorMessage && <MessageError>{errorMessage}</MessageError>}

      <h3>Cadastre um paciente</h3>
      <form onSubmit={handleSubmit(createNewPatient)}>
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
        <FlexDiv>
          <SubmitButton type="submit" disabled={isSubmitting}>
            <p>Salvar</p>
          </SubmitButton>

          <StyledLink to="/patients/list">Pacientes cadastrados</StyledLink>
        </FlexDiv>
      </form>
    </InputContainer>
  )
}
