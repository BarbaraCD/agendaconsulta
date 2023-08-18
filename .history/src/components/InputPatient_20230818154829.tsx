import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputContainer } from '../styles/InputContainer'

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

  const onSubmit: SubmitHandler<patientSchema> = (data) => {
    console.log(data)
  }

  return (
    <InputContainer>
      <form onSubmit={onSubmit}>
        <div></div>
      </form>
    </InputContainer>
  )
}
