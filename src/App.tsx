import { useState } from 'react'
import { AppointmentList } from './components/AppointmentList'
import { Logo } from './components/Logo'
import { ScheduleSidebar } from './components/ScheduleSidebar'
import type { Appointment, NewAppointment } from './types/appointment'
import { todayISO } from './utils/appointments'

function App() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [agendaDate, setAgendaDate] = useState(todayISO())

  function addAppointment(newAppointment: NewAppointment) {
    const appointment: Appointment = { id: crypto.randomUUID(), ...newAppointment }
    setAppointments((current) => [...current, appointment]) // new array, no mutation
    setAgendaDate(newAppointment.date) // show the day that was just scheduled
  }

  function deleteAppointment(id: string) {
    setAppointments((current) => current.filter((appointment) => appointment.id !== id))
  }

  return (
    <div className="app">
      <Logo />
      <ScheduleSidebar appointments={appointments} initialDate={todayISO()} onAdd={addAppointment} />
      <AppointmentList
        appointments={appointments}
        date={agendaDate}
        onDateChange={setAgendaDate}
        onDelete={deleteAppointment}
      />
    </div>
  )
}

export default App
