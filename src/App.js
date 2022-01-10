import React, { useState } from 'react'
import './App.css'
import TaskCard from './TaskCard'
import ProfilePreview from './ProfilePreview'
import timeData from './data.json'

function App() {
  const [timeframe, setTimeframe] = useState('daily')

  function handleTimeframeChange(e) {
    setTimeframe(e.target.value)
  }

  return (
    <div className='dashboard-grid'>
      <ProfilePreview handleChange={handleTimeframeChange} />
      <TaskCard task='work' timeData={timeData[0]} timeframe={timeframe} />
      <TaskCard task='play' timeData={timeData[1]} timeframe={timeframe} />
      <TaskCard task='study' timeData={timeData[2]} timeframe={timeframe} />
      <TaskCard task='exercise' timeData={timeData[3]} timeframe={timeframe} />
      <TaskCard task='social' timeData={timeData[4]} timeframe={timeframe} />
      <TaskCard task='self-care' timeData={timeData[5]} timeframe={timeframe} />
    </div>
  )
}

export default App
