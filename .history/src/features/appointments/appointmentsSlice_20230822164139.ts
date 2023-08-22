import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit'
import { AppointmentsProps } from '../../components/Appointments.tsx.old'

interface AppointmentState {
  appointments: AppointmentsProps[]
}

const initialState: AppointmentState = {
  appointments: [],
}

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<AppointmentsProps>) => {
      state.appointments.push(action.payload)
    },
  },
})

export const { addAppointment } = appointmentSlice.actions

export type AppointmentAction = ReturnType<
  CaseReducer<typeof appointmentSlice.reducer>
>

export default appointmentSlice.reducer
