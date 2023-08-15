import { z } from 'zod'
import { InputContainer, StyledInput } from '../styles/InputContainer'
import { useForm } from 'react-hook-form'

const createDocFormSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é orbigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  crm: z.number().min(5, 'O CRM é obrigatório'),
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

type CreateDocFormData = z.infer<typeof createDocFormSchema>

export function InputDoctors(props: CreateDocFormData) {
  const { register, handleSubmit } = useForm()

  return <main></main>
}
