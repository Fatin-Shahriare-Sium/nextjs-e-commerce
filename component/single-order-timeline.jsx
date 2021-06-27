import React from 'react'
import complete from '../assets/tick.svg'

const SingleOrderTimeline = () => {
    return (
        <div className='timeline-container '>
            <p style={{ fontSize: '1.7rem', fontWeight: '700', margin: '1% 1%' }}>Order Status</p>
            <div className="timeline-single-content">
                <p>#allahisalmighty</p>
            </div>
            <div className="timeline-single-content">
                <p style={{ fontSize: '1.7rem', fontWeight: '700' }}>Pending</p>
                <p style={{ width: '90%', wordBreak: 'break-word', fontSize: '1.5rem', fontWeight: '500' }}>Thank you for placing your order at Evaly. We will start processing your order after payment is complete - Evaly</p>
                <p>1234567890-098765ughglhgf</p>
                <div className='circle'>
                    <img src={complete} alt="" />
                </div>
            </div>

            <div className="timeline-single-content">
                <p>#allahisalmighty</p>
            </div>
            <div className="timeline-single-content">
                <p>#allahisalmighty</p>
            </div>
            <div className="timeline-single-content">
                <p>#allahisalmighty</p>
            </div>
        </div>
    )
}

export default SingleOrderTimeline;
