import React from 'react'
import complete from '../assets/tick.svg'

const SingleOrderTimeline = ({orderTimeline}) => {
    return (
        <div className='timeline-container '>
            <p style={{ fontSize: '1.7rem', fontWeight: '700', margin: '1% 1%' }}>Order Status</p>
         
        
            {orderTimeline.map((sig,index)=><div key={index} className="timeline-single-content">
                <p style={{ fontSize: '1.7rem', fontWeight: '700' }}>{sig.status}</p>
                <p style={{ width: '90%', wordBreak: 'break-word', fontSize: '1.5rem', fontWeight: '500' }}>{sig.text}</p>
                <p>{sig.time}</p>
                <div className='circle'>
                    <img src={complete} alt="" />
                </div>
            </div>)}

        </div>
    )
}

export default SingleOrderTimeline;
