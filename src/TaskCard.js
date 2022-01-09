import React from 'react'
import ellipsis from './images/icon-ellipsis.svg'

export default function TaskCard({ task, isPrimary }) {
    
    function getIndex() {
        if (isPrimary) {
            return -1;
        }
    }

    return (
        <div className='card-wrapper'>
            <div className={`card-header ${task.toLowerCase()}`} style={{zIndex: 10}}>
                <div className='card-container' style={{ zIndex: getIndex() }}>
                    <div className='card-title'>
                        <h2 className='task'>{task}</h2>
                        <div className='btn-configure'>
                            <img src={ellipsis}/>
                        </div>
                    </div>
                    <div className='hours'>32hrs</div>
                    <div className='previous-time'>Last week: 10hrs</div>
                </div>
            </div>
        </div>
    )
}
