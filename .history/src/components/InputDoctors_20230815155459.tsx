import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { SpaceContext } from 'antd/es/space'

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

export function InputDoctors() {
  const [output, setOutput] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function createDoctortest(data: CreateDocFormData) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <main>
      <form onSubmit={handleSubmit(createDoctortest)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
      </form>
      <pre>{output}</pre>
    </main>
  )
}
