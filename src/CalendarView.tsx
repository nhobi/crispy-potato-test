import { useState } from 'react'
import {
  Calendar,
  dateFnsLocalizer,
  type SlotInfo,
  type View,
} from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { enUS } from 'date-fns/locale'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { 'en-US': enUS },
})

export interface CalendarEvent {
  title: string
  start: Date
  end: Date
}

const today = new Date()
const at = (day: number, hour: number) =>
  new Date(today.getFullYear(), today.getMonth(), day, hour)

const initialEvents: CalendarEvent[] = [
  { title: 'Team standup', start: at(today.getDate(), 9), end: at(today.getDate(), 10) },
  {
    title: 'Interview prep',
    start: at(today.getDate() + 2, 14),
    end: at(today.getDate() + 2, 16),
  },
]

export default function CalendarView() {
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents)
  const [view, setView] = useState<View>('month')
  const [date, setDate] = useState<Date>(today)

  const handleSelectSlot = ({ start, end }: SlotInfo) => {
    const title = window.prompt('New event name')
    if (title) {
      setEvents((prev) => [...prev, { title, start, end }])
    }
  }

  return (
    <div style={{ height: 600 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        view={view}
        onView={setView}
        date={date}
        onNavigate={setDate}
        style={{ height: '100%' }}
      />
    </div>
  )
}
