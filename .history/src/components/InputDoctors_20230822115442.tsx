import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FlexDiv,
  InputContainer,
  StyledInput,
  SubmitButton,
} from '../styles/InputContainer'
import { StyledLink } from '../styles/Appointments'
import { getPatient, createPatient, updatePatient } from '../services/patient.services'
import { PatientSchemaType } from './InputPatient'
import { PatientsProps } from './PatientTable'

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

type DoctorSchemaType = z.infer<typeof doctorSchema>

export function InputDoctors() {
  const [output, setOutput] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DoctorSchemaType>({
    resolver: zodResolver(doctorSchema),
    defaultValues: { name: '', crm: '', specialization: '' },
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
      <h3>Cadastre um médico</h3>
      <form onSubmit={handleSubmit(createDoctortest)}>
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
          <SubmitButton type="submit">
            <p>Salvar</p>
          </SubmitButton>
          <StyledLink to="/patients/list">Médicos cadastrados</StyledLink>
        </FlexDiv>
      </form>
    </InputContainer>
  )
}
