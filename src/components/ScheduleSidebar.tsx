import type { Appointment, NewAppointment } from '../types/appointment'
import { AppointmentForm } from './AppointmentForm'

type ScheduleSidebarProps = {
  appointments: Appointment[]
  initialDate: string
  onAdd: (appointment: NewAppointment) => void
}

export function ScheduleSidebar({ appointments, initialDate, onAdd }: ScheduleSidebarProps) {
  return (
    <aside className="sidebar">
      <header>
        <h1 className="title-lg">Agende um atendimento</h1>
        <p className="text-sm muted">
          Selecione data, horário e informe o nome do cliente para criar o agendamento
        </p>
      </header>
      <AppointmentForm appointments={appointments} initialDate={initialDate} onSubmit={onAdd} />
    </aside>
  )
}
