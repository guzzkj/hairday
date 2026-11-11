import { PERIODS } from '../constants/periods'
import type { Appointment, PeriodId } from '../types/appointment'

export type GroupedAppointments = Record<PeriodId, Appointment[]>

/** Finds which period a time (HH:MM) belongs to. */
export function getPeriodId(time: string): PeriodId | undefined {
  return PERIODS.find((period) => period.times.includes(time))?.id
}

/** Keeps only the appointments of one date (filter) and groups them by period (reduce), sorted by time. */
export function groupByPeriod(appointments: Appointment[], date: string): GroupedAppointments {
  const initial: GroupedAppointments = { morning: [], afternoon: [], night: [] }

  const grouped = appointments
    .filter((appointment) => appointment.date === date)
    .reduce<GroupedAppointments>((groups, appointment) => {
      const periodId = getPeriodId(appointment.time)
      if (periodId) {
        groups[periodId] = [...groups[periodId], appointment]
      }
      return groups
    }, initial)

  for (const period of PERIODS) {
    grouped[period.id] = [...grouped[period.id]].sort((a, b) => a.time.localeCompare(b.time))
  }
  return grouped
}

/** "2024-01-10" -> "10/01/2024" */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-')
  return `${day}/${month}/${year}`
}

/** Today as YYYY-MM-DD in local time. */
export function todayISO(): string {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}
