import React, { useEffect, useState } from 'react'
import { useData } from '../store'
import useUrl from './hooks/useUrl'
import moment from 'moment'
const SingleOrderSidebar = ({ id, paymentStatus, orderStatus, selectedId, handleSelector, date, totalAmount }) => {
    let orderBoxStyle = {
        padding: '5px',
        width: '90%',
        margin: '1% auto',
        cursor: 'pointer'
    }
    return (
        <div onClick={() => handleSelector(id)} style={selectedId == id ? { ...orderBoxStyle, borderLeft: '3px solid #000000' } : orderBoxStyle}>
            <p style={{ fontSize: '1.5rem', fontWeight: '500' }}>{`Order-${id}`}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.3rem', fontWeight: '500' }}>
                <p>{`$${totalAmount}`}</p>
                <p>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            <div style={{ display: 'flex' }} className="status">
                <p style={{ maxWidth: 'max-content', marginLeft: '1%', borderRadius: '3px', fontWeight: '500', background: '#ffec00de', fontSize: '1.1rem' }} className=' text-dark p-2'>{paymentStatus}</p>
                <p style={{ maxWidth: 'max-content', marginLeft: '7%', borderRadius: '3px', fontWeight: '500', fontSize: '1.1rem' }} className='bg-primary text-white p-2'>{orderStatus}</p>
            </div>

        </div>
    )
}

export default SingleOrderSidebar;
