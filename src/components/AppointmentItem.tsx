import { TrashIcon } from '@phosphor-icons/react'
import type { Appointment } from '../types/appointment'

type AppointmentItemProps = {
  appointment: Appointment
  onDelete: (id: string) => void
}

export function AppointmentItem({ appointment, onDelete }: AppointmentItemProps) {
  return (
    <li className="appointment">
      <span className="appointment__time">{appointment.time}</span>
      <span className="appointment__name">{appointment.clientName}</span>
      <button
        type="button"
        className="icon-button"
        aria-label={`Excluir agendamento de ${appointment.clientName} às ${appointment.time}`}
        onClick={() => onDelete(appointment.id)}
      >
        <TrashIcon size={18} />
      </button>
    </li>
  )
}
