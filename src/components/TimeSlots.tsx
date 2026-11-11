import { PERIODS } from '../constants/periods'

type TimeSlotsProps = {
  selectedTime: string
  /** times already booked on the chosen date */
  unavailableTimes: string[]
  onSelect: (time: string) => void
}

export function TimeSlots({ selectedTime, unavailableTimes, onSelect }: TimeSlotsProps) {
  return (
    <div className="time-slots">
      {PERIODS.map((period) => (
        <div key={period.id}>
          <p className="text-sm muted">{period.label}</p>
          <div className="time-slots__grid">
            {period.times.map((time) => (
              <button
                key={time}
                type="button"
                className={`time-slot${selectedTime === time ? ' time-slot--selected' : ''}`}
                disabled={unavailableTimes.includes(time)}
                aria-pressed={selectedTime === time}
                onClick={() => onSelect(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
