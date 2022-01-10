import React from 'react'
import profilePhoto from './images/image-jeremy.png'

export default function ProfilePreview({ handleChange }) {
  return (
    <div className='profileWrapper'>
      <div className='profileInfo'>
        <img src={profilePhoto} />
        <div className='profileName'>
          <label>Report for</label>
          <h1>
            Jeremy
            <br />
            Robson
          </h1>
        </div>
      </div>
      <div className='timeframes-list' onChange={(e) => handleChange(e)}>
        <input
          defaultChecked
          name='timeframe'
          type='radio'
          value='daily'
          id='daily'
        />
        <label htmlFor='daily'>Daily</label>

        <input name='timeframe' type='radio' value='weekly' id='weekly' />
        <label htmlFor='weekly'>Weekly</label>

        <input name='timeframe' type='radio' value='monthly' id='monthly' />
        <label htmlFor='monthly'>Monthly</label>
      </div>
    </div>
  )
}
