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
  StyledValidation,
  StyledLink,
  SubmitButton,
} from '../styles/InputContainer'
import {
  createDoctor,
  getDoctorById,
  updateDoctor,
} from '../services/doctor.services'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'

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

  useEffect(() => {
    fetchDoctor()
  }, [])

  async function fetchDoctor() {
    if (!id) return
    try {
      const response = await getDoctorById(Number(id))
      reset(response as unknown as DoctorSchemaType)
    } catch (error) {
      console.error('Error fetching Doctors:', error)
    }
  }

  async function createNewDoctor(data: DoctorSchemaType) {
    try {
      if (id) {
        await updateDoctor(Number(id), data)
        navigate(-1)
      } else {
        await createDoctor(data)
      }
      setSuccessMessage('Médico salvo com sucesso!')
      setTimeout(() => {
        setSuccessMessage(null)
      }, 2000)
      reset()
    } catch (error) {
      setErrorMessage('Erro ao cadastrar/atualizar médico.')
    }
  }

  return (
    <InputContainer>
      {successMessage && <MessageSaved>{successMessage}</MessageSaved>}
      {errorMessage && <MessageError>{errorMessage}</MessageError>}

      <form onSubmit={handleSubmit(createNewDoctor)}>
        <FlexDiv>
          <StyledLink to="/patients/list">
            <ArrowLeftOutlined />
            Voltar
          </StyledLink>
          <SubmitButton type="submit" disabled={isSubmitting}>
            <p>Salvar</p>
          </SubmitButton>
        </FlexDiv>

        <h3>Cadastre um médico</h3>
        <div>
          <label htmlFor="name">Nome:</label>
          <StyledInput
            {...register('name')}
            type="text"
            name="name"
            id="name"
            placeholder="nome do médico"
            autoComplete="off"
          />
          {errors.name && (
            <StyledValidation>{errors.name.message}</StyledValidation>
          )}
        </div>

        <div>
          <label htmlFor="crm">CRM:</label>
          <StyledInput
            {...register('crm')}
            type="number"
            name="crm"
            id="crm"
            maxLength={5}
            placeholder="numero do CRM"
            autoComplete="off"
          />
          {errors.crm && (
            <StyledValidation>{errors.crm.message}</StyledValidation>
          )}
        </div>

        <div>
          <label htmlFor="specialization">Especialização:</label>
          <StyledInput
            {...register('specialization')}
            type="text"
            name="specialization"
            id="specialization"
            placeholder="digite a especialização medica"
            autoComplete="off"
          />
          {errors.specialization && (
            <StyledValidation>{errors.specialization.message}</StyledValidation>
          )}
        </div>
      </form>
    </InputContainer>
  )
}
