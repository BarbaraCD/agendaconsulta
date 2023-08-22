import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FlexDiv,
  InputContainer,
  MessageError,
  MessageSaved,
  StyledInput,
  SubmitButton,
} from '../styles/InputContainer'
import { StyledLink } from '../styles/Appointments'
import { createDoctor, getDoctors } from '../services/doctor.services'
import { DoctorsProps } from './DoctorTable'

const doctorSchema = z.object({
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
  crm: z
    .string()
    .min(5, 'CRM é obrigatório')
    .max(5, 'CRM deve conter 5 digitos'),
  specialization: z.string().nonempty('A especialização é obrigatória'),
})

export type DoctorSchemaType = z.infer<typeof doctorSchema>

export function InputDoctors() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DoctorSchemaType>({
    resolver: zodResolver(doctorSchema),
    defaultValues: { name: '', crm: '', specialization: '' },
  })

  const [doctors, setDoctors] = useState<DoctorsProps>()
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    fetchDoctors()
  }, [])

  async function fetchDoctors() {
    try {
      const response: DoctorSchemaType = await getDoctors()
      setDoctors(response)
    } catch (error) {
      console.error('Error fetching Doctors:', error)
    }
  }

  async function createNewDoctor(data: DoctorSchemaType) {
    try {
      await createDoctor(data)
      fetchDoctors()
      setSuccessMessage('Paciente salvo com sucesso!')
      setErrorMessage(null)
    } catch (error) {
      setErrorMessage('Erro ao cadastrar paciente.')
      setSuccessMessage(null)
      console.log('Erro ao cadastrar paciente:', error)
    }
  }

  return (
    <InputContainer>
      <h3>Cadastre um médico</h3>
      <form onSubmit={handleSubmit(createNewDoctor)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <StyledInput
            {...register('name')}
            type="text"
            placeholder="nome do médico"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="crm">CRM:</label>
          <StyledInput
            {...register('crm')}
            type="number"
            maxLength={5}
            placeholder="numero do CRM"
          />
          {errors.crm && <span>{errors.crm.message}</span>}
        </div>

        <div>
          <label htmlFor="specialization">Especialização:</label>
          <StyledInput
            {...register('specialization')}
            type="text"
            placeholder="digite a especialização medica"
          />
          {errors.specialization && (
            <span>{errors.specialization.message}</span>
          )}
        </div>

        <FlexDiv>
          <SubmitButton type="submit" disabled={isSubmitting}>
            <p>Salvar</p>
          </SubmitButton>
          <StyledLink to="/doctors/list">Médicos cadastrados</StyledLink>
        </FlexDiv>
      </form>
      {successMessage && <MessageSaved>{successMessage}</MessageSaved>}
      {errorMessage && <MessageError>{errorMessage}</MessageError>}
    </InputContainer>
  )
}
