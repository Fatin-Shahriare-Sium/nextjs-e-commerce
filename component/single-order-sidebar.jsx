import React, { useEffect, useState } from 'react'
import { useData } from '../store'
import useUrl from './hooks/useUrl'

const SingleOrderSidebar = ({ id, paymentStatus, orderStatus }) => {

    return (
        <div style={{ border: '2px solid red', padding: '5px', width: '90%', margin: '1% auto' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: '500' }}>Order-918765w421678903129873</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} className="status">
                <p style={{ maxWidth: 'max-content', marginLeft: '1%', borderRadius: '3px', fontWeight: '500', background: '#ffec00de', fontSize: '1.1rem' }} className=' text-dark p-2'>Unpaid</p>
                <p style={{ maxWidth: 'max-content', marginLeft: '1%', borderRadius: '3px', fontWeight: '500', fontSize: '1.1rem' }} className='bg-primary text-white p-2'>pending</p>
            </div>
        </div>
    )
}

export default SingleOrderSidebar;
