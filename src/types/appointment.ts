export type Appointment = {
  id: string
  clientName: string
  /** ISO date: YYYY-MM-DD */
  date: string
  /** HH:MM */
  time: string
}

export type PeriodId = 'morning' | 'afternoon' | 'night'

export type Period = {
  id: PeriodId
  label: string
  range: string
  times: string[]
}

export type NewAppointment = Omit<Appointment, 'id'>
