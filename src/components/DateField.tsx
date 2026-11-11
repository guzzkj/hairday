import { CalendarBlankIcon, CaretDownIcon } from '@phosphor-icons/react'
import { formatDate } from '../utils/appointments'

type DateFieldProps = {
  id: string
  value: string
  onChange: (date: string) => void
  ariaLabel?: string
}

/** Styled date picker: shows dd/mm/yyyy; a transparent native date input covers it and opens the calendar. */
export function DateField({ id, value, onChange, ariaLabel }: DateFieldProps) {
  return (
    <div className="date-field">
      <CalendarBlankIcon size={20} className="icon-yellow" />
      <span className="date-field__value">{value ? formatDate(value) : 'Selecione'}</span>
      <CaretDownIcon size={18} className="icon-gray" />
      <input
        id={id}
        type="date"
        value={value}
        aria-label={ariaLabel}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
