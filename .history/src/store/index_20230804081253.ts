import { configureStore, ThunkAction, Action  } from "@reduxjs/toolkit";
import appointmentReducer  from '../features/appointments/appointmentsSlice'

const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store