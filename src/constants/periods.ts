import type { Period } from '../types/appointment'

export const PERIODS: Period[] = [
  { id: 'morning', label: 'Manhã', range: '09h-12h', times: ['09:00', '10:00', '11:00', '12:00'] },
  {
    id: 'afternoon',
    label: 'Tarde',
    range: '13h-18h',
    times: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
  },
  { id: 'night', label: 'Noite', range: '19h-21h', times: ['19:00', '20:00', '21:00'] },
]

export const EMPTY_PERIOD_MESSAGE = 'Você ainda não tem agendamentos cadastrados nesse período.'
