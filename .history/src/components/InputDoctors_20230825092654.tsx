/* eslint-disable react-hooks/exhaustive-deps */
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
import { StyledLink, StyledLink2 } from '../styles/Appointments'
import {
  createDoctor,
  getDoctorById,
  updateDoctor,
} from '../services/doctor.services'
import { useParams, useNavigate } from 'react-router-dom'
import { CloseOutlined } from '@ant-design/icons'

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
  specialization: z
    .string()
    .nonempty('A especialização é obrigatória')
    .transform((specialization) => {
      return specialization
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
})

export type DoctorSchemaType = z.infer<typeof doctorSchema>

export function InputDoctors() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DoctorSchemaType>({
    resolver: zodResolver(doctorSchema),
    defaultValues: { name: '', crm: '', specialization: '' },
  })

  const navigate = useNavigate()
  const { id } = useParams()
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [editing, setEditing] = useState<boolean>(false)

  useEffect(() => {
    fetchDoctor()
  }, [])

  async function fetchDoctor() {
    if (!id) return
    try {
      const response = await getDoctorById(Number(id))
      reset(response as unknown as DoctorSchemaType)
      setEditing(true)
    } catch (error) {
      console.error('Error fetching Doctors:', error)
    }
  }

  async function createNewDoctor(data: DoctorSchemaType) {
    try {
      if (id) {
        await updateDoctor(Number(id), data)
      } else {
        await createDoctor(data)
      }
      setSuccessMessage('Médico salvo com sucesso!')
      navigate(-1)
    } catch (error) {
      setErrorMessage('Erro ao cadastrar/atualizar médico.')
    }
  }

  return (
    <InputContainer>
      {successMessage && <MessageSaved>{successMessage}</MessageSaved>}
      {errorMessage && <MessageError>{errorMessage}</MessageError>}
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
      {editing && (
        <StyledLink2 to="/appointments/calendar">
          <CloseOutlined />
          Cancelar
        </StyledLink2>
      )}
    </InputContainer>
  )
}
