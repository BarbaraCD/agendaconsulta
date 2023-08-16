import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  InputContainer,
  StyledInput,
  SubmitButton,
} from '../styles/InputContainer'

const createDocFormSchema = z.object({
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
  crm: z.number().min(5).max(5, 'O CRM contem no maximo 5 digitos'),
  specialization: z.string().nonempty('A especialização é obrigatória'),
})

type CreateDocFormData = z.infer<typeof createDocFormSchema>

export function InputDoctors() {
  const [output, setOutput] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDocFormData>({
    resolver: zodResolver(createDocFormSchema),
    defaultValues: { name: '', crm: 0, specialization: '' },
  })

  function createDoctortest(data: CreateDocFormData) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <InputContainer>
      <form onSubmit={handleSubmit(createDoctortest)}>
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
          <label htmlFor="crm">CRM:</label>
          <StyledInput
            {...register('crm')}
            type="number"
            maxLength={5}
            placeholder="digite o numero do CRM"
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

        <SubmitButton type="submit">
          <p>Salvar</p>
        </SubmitButton>
      </form>
      <pre>{output}</pre>
    </InputContainer>
  )
}
