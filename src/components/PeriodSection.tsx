import { CloudSunIcon, MoonStarsIcon, SunHorizonIcon } from '@phosphor-icons/react'
import { EMPTY_PERIOD_MESSAGE } from '../constants/periods'
import type { Appointment, Period, PeriodId } from '../types/appointment'
import { AppointmentItem } from './AppointmentItem'

type PeriodSectionProps = {
  period: Period
  appointments: Appointment[]
  onDelete: (id: string) => void
}

const PERIOD_ICONS: Record<PeriodId, typeof SunHorizonIcon> = {
  morning: SunHorizonIcon,
  afternoon: CloudSunIcon,
  night: MoonStarsIcon,
}

export function PeriodSection({ period, appointments, onDelete }: PeriodSectionProps) {
  const Icon = PERIOD_ICONS[period.id]

  return (
    <section className="period" aria-label={period.label}>
      <header className="period__header">
        <Icon size={20} className="icon-yellow" />
        <h3 className="text-sm">{period.label}</h3>
        <span className="text-sm muted period__range">{period.range}</span>
      </header>
      {appointments.length === 0 ? (
        <p className="period__empty text-sm muted">{EMPTY_PERIOD_MESSAGE}</p>
      ) : (
        <ul className="period__list">
          {appointments.map((appointment) => (
            <AppointmentItem key={appointment.id} appointment={appointment} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </section>
  )
}
