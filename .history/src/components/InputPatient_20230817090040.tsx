import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useEffect, useState } from 'react'
import {
  InputContainer,
  StyledInput,
  SubmitButton,
} from '../styles/InputContainer'
import {
  getPatient,
  createPatient,
  updatePatient,
} from '../services/patient.services'
import { PatientsProps } from './Patients'

const createPatFormSchema = z.object({
  id: z.number(),
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
  age: z
    .string()
    .nonempty('Idade é obrigatória')
    .refine((value) => /^\d{3}$/.test(value), {
      message: 'Selecione uma idade entre 0 e 100',
    }),
  telephone: z.string().refine((value) => /^\d{11}$/.test(value), {
    message: 'O número de telefone deve conter 11 digitos',
  }),
  email: z
    .string()
    .nonempty('O email é obrigatório')
    .email('Formato de email inválido')
    .toLowerCase(),
})

type CreatePatFormData = z.infer<typeof createPatFormSchema>

export function InputPatients() {
  useEffect(() => {
    fetchPatient().catch((error) => {
      console.error('Error fetching Patients:', error)
    })
  }, [])

  const [patients, setPatients] = useState<CreatePatFormData>('')
  const [newPatient, setNewPatient] = useState<CreatePatFormData>({
    id: 0,
    name: '',
    age: '',
    telephone: '',
    email: '',
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePatFormData>({
    resolver: zodResolver(createPatFormSchema),
    defaultValues: { name: '', age: '', telephone: '', email: '' },
  })

  async function fetchPatient() {
    try {
      const response: PatientsProps[] = await getPatient()
      setPatients(response)
    } catch (error) {
      console.error('Error fetching Patients:', error)
    }
  }

  async function createNewPatient() {
    if (
      newPatient?.name.trim() !== '' &&
      typeof newPatient?.age === 'number' &&
      newPatient?.age > 0 &&
      typeof newPatient?.telephone === 'number' &&
      newPatient?.telephone > 0 &&
      newPatient?.email.trim() !== ''
    ) {
      try {
        if (newPatient.id === 0) {
          await createPatient(
            newPatient.name,
            newPatient.age,
            newPatient.telephone,
            newPatient.email,
          )
          alert('Paciente cadastrado com sucesso!')
        } else {
          await updatePatient(newPatient.id, {
            name: newPatient.name,
            age: newPatient.age,
            telephone: newPatient.telephone,
            email: newPatient.email,
            id: 0,
          })
          alert('Atualização realizada!')
        }
        await fetchPatient()
        setNewPatient({
          id: 0,
          name: '',
          age: 0,
          telephone: 0,
          email: '',
        })
        console.log('Paciente cadastrado/atualizado com sucesso!')
      } catch (error) {
        console.log('Erro ao cadastrar/atualizar paciente:', error)
      }
    } else {
      console.error('Por favor, preencha todos os campos corretamente.')
    }
  }

  return (
    <InputContainer>
      <form onSubmit={handleSubmit(createNewPatient)}>
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
          <label htmlFor="age">Idade:</label>
          <StyledInput
            {...register('age')}
            type="number"
            maxLength={3}
            placeholder="digite sua idade"
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div>
          <label htmlFor="telephone">Telefone:</label>
          <StyledInput
            {...register('telephone')}
            type="number"
            maxLength={11}
            placeholder="digite o telefone para contato"
          />
          {errors.telephone && <span>{errors.telephone.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <StyledInput
            {...register('email')}
            type="text"
            placeholder="email@example.com"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <SubmitButton type="submit">
          <p>Salvar</p>
        </SubmitButton>
      </form>
      <pre>{patients}</pre>
    </InputContainer>
  )
}
