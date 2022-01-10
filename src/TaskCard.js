import React from 'react'
import ellipsis from './images/icon-ellipsis.svg'
import ellipsisW from './images/icon-ellipsisW.svg'
import workIcon from './images/icon-work.svg'
import playIcon from './images/icon-play.svg'
import studyIcon from './images/icon-study.svg'
import exerciseIcon from './images/icon-exercise.svg'
import socialIcon from './images/icon-social.svg'
import selfcareIcon from './images/icon-self-care.svg'

export default function TaskCard({ task, timeData, timeframe }) {
  function getIcon() {
    switch (task) {
      case 'play':
        return playIcon
      case 'study':
        return studyIcon
      case 'exercise':
        return exerciseIcon
      case 'social':
        return socialIcon
      case 'self-care':
        return selfcareIcon
      default:
        return workIcon
    }
  }

  function ellipsisEnter(e) {
    e.target.firstChild.src = ellipsisW
  }

  function ellipsisLeave(e) {
    e.target.firstChild.src = ellipsis
  }

  return (
    <div className={`card-header ${task}`} style={{ zIndex: 10 }}>
      <img className='taskIcon' src={getIcon()} />
      <div className='card-container'>
        <div className='card-title'>
          <h2 className='task'>{task}</h2>
          <div
            className='btn-configure'
            onMouseEnter={(e) => ellipsisEnter(e)}
            onMouseLeave={(e) => ellipsisLeave(e)}>
            <img src={ellipsis} />
          </div>
        </div>
        <div className='hours'>{`${timeData.timeframes[timeframe].current}hrs`}</div>
        <div className='previous-time'>{`previous day - ${timeData.timeframes[timeframe].previous}hrs`}</div>
      </div>
    </div>
  )
}
