import React, { useEffect, useState } from 'react'
import moment, { Moment } from 'moment';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch } from 'react-redux';
import { addAppointment } from '../features/appointments/appointmentsSlice';

import { getDoctors } from '../services/doctor.services'
import { getPatient } from '../services/patient.services'
import { createAppointment } from '../services/appointment.services'

import { APBody, ApFooter, StyledA, StyledAppointments } from "../styles/Appointments"
import "antd"
import dayjs from 'dayjs';
import { Input, Select, TimePicker } from 'antd'

import { DoctorsProps } from './Doctors'
import { PatientsProps } from './Patients'
import { SubmitButton } from './SubmitButton'


export type AppointmentsProps = {
  doctorID: number
  patientId: number
  data: string
  hour: string
  symptoms: string
}

export const Appointments: React.FC = () => {
  const [doctors, setDoctors] = useState<DoctorsProps[]>([])
  const [selectedDoctor, setSelectedDoctor] = useState<number>(-1);
  const [patients, setPatients] = useState<PatientsProps[]>([])
  const [selectedPatient, setSelectedPatient] = useState<number>(-1);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState(dayjs());
  const [symptoms, setSymptoms] = useState<string>('')

  const dispatch = useDispatch();

  useEffect(() => {
    fetchInfos().catch((error) => {
      console.error('Error fetching Patients:', error);
    });
  }, []);

  async function fetchInfos() {
    try {
      const responseDoc: DoctorsProps[] = await getDoctors();
      const responsePat: PatientsProps[] = await getPatient();
      setDoctors(responseDoc);
      setPatients(responsePat);
    } catch (error) {
      console.error('Error fetching Infos:', error);
    }
  }

  const handleDoctorSelect = (value: string) => {
    const selectedDoc = doctors.find((doc) => doc.name === value);
    setSelectedDoctor(selectedDoc ? selectedDoc.id : -1);
  };

  const handlePatientSelect = (value: string) => {
    const selectedPat = patients.find((pat) => pat.name === value);
    setSelectedPatient(selectedPat ? selectedPat.id : -1);
  };

  const handleDateChange = (date: moment.Moment | null, dateString: string) => {
    if (date) {
      setSelectedDate(dateString);
    } else {
      setSelectedDate('');
    }
  };

  const disabledDate = (current: moment.Moment | null) => {
    return current ? current.isBefore(moment().startOf('day')) : false;
  };

  const handleTimeChange = (time: any, timeString: string) => {
    setSelectedTime(timeString);
    console.log(timeString)
  };

  const disabledHours = () => {
    const hours = [];
    for (let i = 0; i < 8; i++) {
      hours.push(i);
    }
    for (let i = 19; i <= 24; i++) {
      hours.push(i);
    }
    return hours;
  };

  const onSelect = (time: Moment | null) => {
    if (time && time.isAfter(moment())) {
      console.log("ping");
      setSelectedTime(moment());
      return;
    }
    setSelectedTime(time);
  };

  const handleSymptomsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSymptoms(event.target.value);
  };

  const handleScheduleAppointment = () => {
    console.log(
      {
        doctorID: selectedDoctor,
        patientId: selectedPatient,
        data: selectedDate,
        hour: selectedTime.toISOString(),
        symptoms: symptoms,
        }
      )
    if (selectedDoctor === -1 || selectedPatient === -1 || !selectedDate || !selectedTime) {
      alert('Por favor, selecione o médico, paciente, data e hora.');
      return;
    }

    try {
      const newAppointment: AppointmentsProps = {
        doctorID: selectedDoctor,
        patientId: selectedPatient,
        data: selectedDate,
        hour: selectedTime.toISOString(),
        symptoms: symptoms,
      };

      createAppointment(newAppointment)
        .then((response) => {
          dispatch(addAppointment(newAppointment));
          console.log('Consulta agendada com sucesso!');
        })
        .catch((error) => {
          console.error('Erro ao agendar consulta:', error);
        });
    } catch (error) {
      console.error('Erro ao agendar consulta:', error);
    }
  };


  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };


  return (
    <StyledAppointments>
      <h3>Agende agora uma consulta</h3>
      <APBody>
        <Select placeholder='selecione um médico' onChange={handleDoctorSelect}>
          {doctors.map((doc) => (
            <Select.Option key={doc.id} value={doc.name}>{doc.name}</Select.Option>
          ))}
        </Select>
        <Select placeholder='selecione um paciente' onChange={handlePatientSelect}>
          {patients.map((pat) => (
            <Select.Option key={pat.id} value={pat.name}>{pat.name}</Select.Option>
          ))}
        </Select>
        {/* <DatePicker 
          onChange={handleDateChange} 
          disabledDate={disabledDate}
        /> */}
        
        <DatePicker
          showTimeSelect
          minTime={new Date(0, 0, 0, 8, 0)}
          maxTime={new Date(0, 0, 0, 18, 0)}
          minuteStep={60}
          selected={date}
          onChange={date => setDate(date)}
          dateFormat="dd/MM/yyyy HH:mm"
        />

        {/* <TimePicker
          minuteStep={60}
          hourStep={1}
          value={selectedTime}
          format="HH:mm"
          onChange={handleTimeChange}
          disabledHours={disabledHours}
        /> */}
        <Input
          placeholder='Digite os sintomas'
          value={symptoms}
          onChange={handleSymptomsChange}
        />
      </APBody>

      <ApFooter>
        <SubmitButton onClick={handleScheduleAppointment} />
        <StyledA href="/appointments/calendar">Horarios disponíveis</StyledA>
      </ApFooter>

    </StyledAppointments>
  )
}
