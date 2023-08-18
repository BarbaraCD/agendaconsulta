import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const patientSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(100),
  age: z.number().min(3, 'Telefone é obrigatório'),
  phone: z.number().min(11, 'Telefone é obrigatório'),
  email: z.string().email('Email inválido').min(1, 'Email é obirgatório'),
})

type PatientSchemaType = z.infer<typeof patientSchema>
