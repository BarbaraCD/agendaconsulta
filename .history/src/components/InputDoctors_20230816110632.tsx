import { z } from 'zod'
import { useForm } from 'react-hook-form'
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
  crm: z.number().min(5, 'O CRM é obrigatório'),
  specialization: z.string().nonempty('A especialização é obrigatória'),
})

type CreateDocFormData = z.infer<typeof createDocFormSchema>

export function InputDoctors() {
  // const [output, setOutput] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDocFormData>({
    resolver: zodResolver(createDocFormSchema),
  })

  function createDoctortest(data: CreateDocFormData) {
    console.log(JSON.stringify(data))
  }

  return (
    <InputContainer>
      <form onSubmit={handleSubmit(createDoctortest)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <StyledInput
            {...register('name', { required: true })}
            type="text"
            placeholder="digite seu nome"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="crm">CRM:</label>
          <StyledInput
            {...register('crm', { required: true })}
            type="number"
            placeholder="digite o numero do CRM"
          />
          {errors.crm && <span>{errors.crm.message}</span>}
        </div>

        <div>
          <label htmlFor="specialization">Especialização:</label>
          <StyledInput
            {...register('specialization', { required: true })}
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
      {/* <pre>{output}</pre> */}
    </InputContainer>
  )
}
