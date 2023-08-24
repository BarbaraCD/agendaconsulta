/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import 'react-datepicker/dist/react-datepicker.css'
import { Select } from 'antd'

import {
  createAppointment,
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
  MessageError,
  MessageSaved,
  StyledInput,
  StyledSelect,
  SubmitButton,
} from '../styles/InputContainer'
import { useParams } from 'react-router-dom'
import { CloseOutlined } from '@ant-design/icons'
import { DoctorsProps } from './DoctorTable'
import { PatientsProps } from './PatientTable'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { getDoctorById } from '../services/doctor.services'
import { getPatient, getPatientById } from '../services/patient.services'
import { DoctorSchemaType, DoctorSchemaType } from './InputDoctors'
import { PatientSchemaType } from './InputPatient'

export type AppointmentsProps = {
  doctorID: number
  patientID: number
  date: Date
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
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentSchemaType>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      doctorID: undefined,
      patientID: undefined,
      date: new Date(),
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
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { id } = useParams()

  useEffect(() => {
    fetchInfos().catch((error) => {
      console.error('Error fetching Patients:', error)
    })
  }, [])

  async function fetchInfos() {
    if (!id) return
    try {
      const responseDoc = await getDoctorById(Number(selectedDoctor))
      const responsePat = await getPatientById(Number(selectedPatient))
      const responseAp = await getAppointmentById(Number(id))
      reset(responseDoc)
      reset(responsePat)
      reset(responseAp as unknown as AppointmentSchemaType)
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

  function isWeekday(date: Date) {
    const day = date.getDay()
    return day !== 0 && day !== 6
  }

  function isAppointmented(time: Date) {
    const selectedDateISO = time
    const existingAppointment = appointments.find(
      (appointment) => appointment.date === selectedDateISO,
    )
    return existingAppointment
  }

  const handleScheduleAppointment = async () => {
    try {
      const newAppointment: AppointmentSchemaType = {
        doctorID: Number(selectedDoctor),
        patientID: Number(selectedPatient),
        date: selectedDate,
        symptoms,
      }
      if (id) {
        await updateAppointment(Number(id), newAppointment)
      } else {
        await createAppointment(newAppointment)
      }
      setSuccessMessage('Consulta agendada com sucesso!')
    } catch (error) {
      setErrorMessage('Erro ao agendar/atualizar consulta.')
    }
  }

  return (
    <InputContainer>
      {successMessage && <MessageSaved>{successMessage}</MessageSaved>}
      {errorMessage && <MessageError>{errorMessage}</MessageError>}
      <form onSubmit={handleSubmit(handleScheduleAppointment)}>
        <h3>Agende agora uma consulta</h3>

        <div>
          <Controller
            name="doctorID"
            control={control}
            render={({ field }) => (
              <StyledSelect {...field} placeholder="selecione um médico">
                {doctors.map((doc) => (
                  <Select.Option key={doc.id} value={doc.id}>
                    {doc.name}
                  </Select.Option>
                ))}
              </StyledSelect>
            )}
          />
          {errors.doctorID && <span>{errors.doctorID.message}</span>}
        </div>

        <div>
          <Controller
            name="patientID"
            control={control}
            render={({ field }) => (
              <StyledSelect {...field} placeholder="selecione um paciente">
                {patients.map((pat) => (
                  <Select.Option key={pat.id} value={pat.id}>
                    {pat.name}
                  </Select.Option>
                ))}
              </StyledSelect>
            )}
          />
          {errors.patientID && <span>{errors.patientID.message}</span>}
        </div>

        <div>
          <Controller
            control={control}
            name="date"
            render={({ field: { value, ...field } }) => (
              <StyledDatepicker
                {...field}
                showTimeSelect
                minTime={new Date(0, 0, 0, 8, 0)}
                maxTime={new Date(0, 0, 0, 18, 0)}
                minDate={new Date()}
                selected={value}
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
