import CalendarView from './CalendarView'
import './App.css'

function App() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '2rem' }}>
      <h1>Calendar</h1>
      <p>Click and drag on an empty slot to add an event.</p>
      <CalendarView />
    </div>
  )
}

export default App
