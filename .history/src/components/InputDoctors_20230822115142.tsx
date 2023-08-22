import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FlexDiv,
  InputContainer,
  StyledInput,
  SubmitButton,
} from '../styles/InputContainer'
import { StyledLink } from '../styles/Appointments'

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

  function createDoctortest(data: DoctorSchemaType) {
    setOutput(JSON.stringify(data, null, 2))
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
