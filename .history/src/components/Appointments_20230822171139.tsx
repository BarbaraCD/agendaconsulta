/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import 'react-datepicker/dist/react-datepicker.css'
import { Input, Select } from 'antd'

import { getDoctors } from '../services/doctor.services'
import { getPatient } from '../services/patient.services'
import {
  createAppointment,
  getAppointment,
  getAppointmentById,
  updateAppointment,
} from '../services/appointment.services'
import { SubmitButton } from './SubmitButton'
import {
  APBody,
  ApFooter,
  StyledAppointments,
  StyledDatepicker,
  StyledLink,
  StyledLink2,
} from '../styles/Appointments'
import { useParams } from 'react-router-dom'
import { CloseOutlined } from '@ant-design/icons'
import { DoctorsProps } from './DoctorTable'
import { PatientsProps } from './PatientTable'
import { z } from 'zod'

export type AppointmentsProps = {
  doctorID: number
  patientID: number
  date: string
  symptoms: string
  id: number
}

const appointmentSchema = z.object({
  doctorID: z.number(),
  patientID: z.number(),
  date: z.date().nonempty(),
  symptoms: z.string().nonempty('Necessário inserir os sintomas'),
})

export const CreateAppointments: React.FC = () => {
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

  const handleDoctorSelect = (value: string) => {
    setSelectedDoctor(value)
  }

  const handlePatientSelect = (value: string) => {
    setSelectedPatient(value)
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

  const handleSymptomsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSymptoms(event.target.value)
  }

  const handleScheduleAppointment = async () => {
    if (!selectedDoctor || !selectedPatient || !selectedDate) {
      alert('Por favor, selecione o médico, paciente, data e hora.')
      return
    }
    try {
      const newAppointment: AppointmentsProps = {
        doctorID: Number(selectedDoctor),
        patientID: Number(selectedPatient),
        date: selectedDate.toISOString(),
        symptoms,
        id: 0,
      }
      if (!id) {
        await createAppointment(newAppointment)
        alert('Consulta agendada com sucesso!')
      } else {
        await updateAppointment(id, newAppointment)
        alert('Atualização realizada!')
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
    <StyledAppointments>
      <APBody>
        <h3>Agende agora uma consulta</h3>
        <Select
          placeholder="selecione um médico"
          value={selectedDoctor}
          onChange={handleDoctorSelect}
        >
          {doctors.map((doc) => (
            <Select.Option key={doc.id} value={doc.id.toString()}>
              {doc.name}
            </Select.Option>
          ))}
        </Select>
        <Select
          placeholder="selecione um paciente"
          value={selectedPatient}
          onChange={handlePatientSelect}
        >
          {patients.map((pat) => (
            <Select.Option key={pat.id} value={pat.id.toString()}>
              {pat.name}
            </Select.Option>
          ))}
        </Select>
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
        <Input
          placeholder="Digite os sintomas"
          value={symptoms}
          onChange={handleSymptomsChange}
        />
      </APBody>

      <ApFooter>
        <SubmitButton onClick={handleScheduleAppointment} />
        <StyledLink to="/appointments/calendar">
          Horarios disponíveis
        </StyledLink>
      </ApFooter>
      {editing && (
        <StyledLink2 to="/appointments/calendar">
          <CloseOutlined />
          Cancelar
        </StyledLink2>
      )}
    </StyledAppointments>
  )
}
