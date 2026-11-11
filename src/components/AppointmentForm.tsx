import { UserSquareIcon } from '@phosphor-icons/react'
import { useState, type FormEvent } from 'react'
import type { Appointment, NewAppointment } from '../types/appointment'
import { DateField } from './DateField'
import { TimeSlots } from './TimeSlots'

type AppointmentFormProps = {
  appointments: Appointment[]
  initialDate: string
  onSubmit: (appointment: NewAppointment) => void
}

export function AppointmentForm({ appointments, initialDate, onSubmit }: AppointmentFormProps) {
  const [date, setDate] = useState(initialDate)
  const [time, setTime] = useState('')
  const [clientName, setClientName] = useState('')
  const [error, setError] = useState('')

  const unavailableTimes = appointments.filter((a) => a.date === date).map((a) => a.time)

  function handleDateChange(newDate: string) {
    setDate(newDate)
    setTime('') // the chosen slot may be taken on the new date
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const name = clientName.trim()

    if (!date || !time || !name) {
      setError('Preencha a data, escolha um horário e informe o nome do cliente.')
      return
    }

    onSubmit({ clientName: name, date, time })
    setClientName('')
    setTime('')
    setError('')
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label className="title-sm" htmlFor="form-date">
          Data
        </label>
        <DateField id="form-date" value={date} onChange={handleDateChange} />
      </div>

      <div className="field">
        <h3 className="title-sm">Horários</h3>
        <TimeSlots selectedTime={time} unavailableTimes={unavailableTimes} onSelect={setTime} />
      </div>

      <div className="field">
        <label className="title-sm" htmlFor="client-name">
          Cliente
        </label>
        <div className="text-input">
          <UserSquareIcon size={20} className="icon-yellow" />
          <input
            id="client-name"
            type="text"
            placeholder="Nome do cliente"
            value={clientName}
            onChange={(event) => setClientName(event.target.value)}
          />
        </div>
      </div>

      {error && (
        <p className="form__error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="button">
        Agendar
      </button>
    </form>
  )
}
