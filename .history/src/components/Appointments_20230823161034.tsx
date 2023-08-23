/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import 'react-datepicker/dist/react-datepicker.css'
import { Select } from 'antd'

import {
  createAppointment,
  getAppointment,
  getAppointmentById,
  updateAppointment,
} from '../services/appointment.services'
import {
  StyledDatepicker,
  StyledLink,
  StyledLink2,
} from '../styles/Appointments'
import {
  ApFooter,
  InputContainer,
  StyledInput,
  SubmitButton,
} from '../styles/InputContainer'
import { useParams } from 'react-router-dom'
import { CloseOutlined } from '@ant-design/icons'
import { DoctorsProps } from './DoctorTable'
import { PatientsProps } from './PatientTable'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { getDoctors } from '../services/doctor.services'
import { getPatient } from '../services/patient.services'

export type AppointmentsProps = {
  doctorID: number
  patientID: number
  date: string
  symptoms: string
  id: number
}

const appointmentSchema = z.object({
  doctorID: z.number().min(1, 'Por favor, selecione um médico.'),
  patientID: z.number().min(1, 'Por favor, selecione um paciente.'),
  date: z.date().refine((date) => date instanceof Date, {
    message: 'Por favor, selecione uma data válida.',
  }),
  symptoms: z.string().min(1, 'Por favor, insira os sintomas.'),
})

export type AppointmentSchemaType = z.infer<typeof appointmentSchema>

export const CreateAppointments: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentSchemaType>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      doctorID: undefined,
      patientID: undefined,
      date: undefined,
      symptoms: '',
    },
  })

  const [editing, setEditing] = useState<boolean>(false)
  const [doctors, setDoctors] = useState<DoctorsProps[]>([])
  const [selectedDoctor, setSelectedDoctor] = useState<string>()
  const [patients, setPatients] = useState<PatientsProps[]>([])
  const [selectedPatient, setSelectedPatient] = useState<string>()
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [symptoms, setSymptoms] = useState<string>('')
  const [appointments, setAppointments] = useState<AppointmentsProps[]>([])
  const { id } = useParams()

  useEffect(() => {
    fetchInfos().catch((error) => {
      console.error('Error fetching Patients:', error)
    })
  }, [])

  async function fetchInfos() {
    if (!id) return
    try {
      const responseDoc: DoctorsProps[] = await getDoctors()
      const responsePat: PatientsProps[] = await getPatient()
      const responseAp: AppointmentsProps[] = await getAppointment()
      setDoctors(responseDoc)
      setPatients(responsePat)
      setAppointments(responseAp)
      // eslint-disable-next-line no-void
      void initForm()
    } catch (error) {
      console.error('Error fetching Infos:', error)
    }
  }

  const initForm = async () => {
    if (id) {
      const responseAp: AppointmentsProps = await getAppointmentById(
        parseInt(id),
      )
      setSelectedDoctor(responseAp.doctorID.toString())
      setSelectedPatient(responseAp.patientID.toString())
      setSelectedDate(new Date(responseAp.date))
      setSymptoms(responseAp.symptoms)
      setEditing(true)
    }
  }

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date)
    } else {
      setSelectedDate(new Date())
    }
  }

  function isWeekday(date: Date) {
    const day = date.getDay()
    return day !== 0 && day !== 6
  }

  function isAppointmented(time: Date) {
    const selectedDateISO = time.toISOString()
    const existingAppointment = appointments.find(
      (appointment) => appointment.date === selectedDateISO,
    )
    return existingAppointment
  }

  const handleScheduleAppointment = async (data: AppointmentSchemaType) => {
    if (!selectedDoctor || !selectedPatient || !selectedDate) {
      alert('Por favor, selecione o médico, paciente, data e hora.')
      return
    }
    try {
      if (id) {
        await updateAppointment(Number(id), data)
      } else {
        await createAppointment(data)
      }
      // await fetchInfos()
      setSelectedDoctor(undefined)
      setSelectedPatient(undefined)
      setSelectedDate(new Date())
      setSymptoms('')
    } catch (error) {
      console.error('Erro ao agendar ou atualizar consulta:', error)
    }
  }

  return (
    <InputContainer>
      <form onSubmit={handleSubmit(handleScheduleAppointment)}>
        <h3>Agende agora uma consulta</h3>
        <div>
          <Controller
            name="doctorID"
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="selecione um médico">
                {doctors.map((doc) => (
                  <Select.Option key={doc.id} value={doc.id}>
                    {doc.name}
                  </Select.Option>
                ))}
              </Select>
            )}
          />
          {errors.doctorID && <span>{errors.doctorID.message}</span>}
        </div>

        <div>
          <Controller
            name="patientID"
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="selecione um paciente">
                {patients.map((pat) => (
                  <Select.Option key={pat.id} value={pat.id}>
                    {pat.name}
                  </Select.Option>
                ))}
              </Select>
            )}
          />
          {errors.patientID && <span>{errors.patientID.message}</span>}
        </div>

        <div>
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <StyledDatepicker
                showTimeSelect
                minTime={new Date(0, 0, 0, 8, 0)}
                maxTime={new Date(0, 0, 0, 18, 0)}
                minDate={new Date()}
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy HH:mm"
                filterTime={(time) => !isAppointmented(time)}
                filterDate={(date) => isWeekday(date)}
              />
            )}
          />
          {errors.date && <span>{errors.date.message}</span>}
        </div>

        <div>
          <StyledInput
            {...register('symptoms')}
            type="text"
            placeholder="digite os sintomas do paciente"
          />
          {errors.symptoms && <span>{errors.symptoms.message}</span>}
        </div>

        <ApFooter>
          <SubmitButton type="submit" disabled={isSubmitting}>
            <p>Salvar</p>
          </SubmitButton>
          <StyledLink to="/appointments/calendar">
            Horarios disponíveis
          </StyledLink>
        </ApFooter>
      </form>

      {editing && (
        <StyledLink2 to="/appointments/calendar">
          <CloseOutlined />
          Cancelar
        </StyledLink2>
      )}
    </InputContainer>
  )
}
