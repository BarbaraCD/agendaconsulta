import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputContainer, SubmitButton } from '../styles/InputContainer'

const patientSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(100),
  age: z.number().min(3, 'Telefone é obrigatório'),
  phone: z.number().min(11, 'Telefone é obrigatório'),
  email: z.string().email('Email inválido').min(1, 'Email é obirgatório'),
})

type PatientSchemaType = z.infer<typeof patientSchema>

export function InputPatients() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientSchemaType>({
    resolver: zodResolver(patientSchema),
  })

  const onSubmit: SubmitHandler<PatientSchemaType> = (data) => {
    console.log(data)
  }

  return (
    <InputContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome completo"
            {...register('name')}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="name">Idade:</label>
          <input
            type="number"
            id="age"
            placeholder="Sua idade"
            {...register('age')}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label htmlFor="name">Telefone:</label>
          <input
            type="number"
            id="phone"
            placeholder="Digite telefone para contato"
            {...register('phone')}
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
        <div>
          <label htmlFor="name">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Digite seu email"
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <SubmitButton type="submit" disabled={isSubmitting}>
          Salvar
        </SubmitButton>
      </form>
    </InputContainer>
  )
}
