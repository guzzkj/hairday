import { PERIODS } from '../constants/periods'
import type { Appointment } from '../types/appointment'
import { groupByPeriod } from '../utils/appointments'
import { DateField } from './DateField'
import { PeriodSection } from './PeriodSection'

type AppointmentListProps = {
  appointments: Appointment[]
  date: string
  onDateChange: (date: string) => void
  onDelete: (id: string) => void
}

export function AppointmentList({ appointments, date, onDateChange, onDelete }: AppointmentListProps) {
  const grouped = groupByPeriod(appointments, date)

  return (
    <main className="agenda">
      <header className="agenda__header">
        <div>
          <h2 className="title-lg">Sua agenda</h2>
          <p className="text-sm muted">Consulte os seus cortes de cabelo agendados por dia</p>
        </div>
        <div className="agenda__date">
          <DateField id="agenda-date" value={date} onChange={onDateChange} ariaLabel="Data da agenda" />
        </div>
      </header>

      <div className="agenda__periods">
        {PERIODS.map((period) => (
          <PeriodSection
            key={period.id}
            period={period}
            appointments={grouped[period.id]}
            onDelete={onDelete}
          />
        ))}
      </div>
    </main>
  )
}
