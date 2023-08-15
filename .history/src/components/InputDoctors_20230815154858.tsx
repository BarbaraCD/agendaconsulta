import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

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
  const [output, setOutput] = useState('')
  const { register, handleSubmit } = useForm()

  function createDoctortest(data: CreateDocFormData) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <main>
      <form onSubmit={handleSubmit(createDoctortest)}></form>
      <pre>{output}</pre>
    </main>
  )
}
