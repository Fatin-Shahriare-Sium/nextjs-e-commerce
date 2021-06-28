import React from 'react'

const SingleOrderShippingAddress = ({address}) => {
    return (
        <div className='single-order-shipping-address p-3'>
            <p style={{ fontSize: '1.7rem', fontWeight: '700',borderBottom:'2px solid #000000' }}>Shipping Address</p>
            <div>
            <p style={{fontSize:'1.5rem',fontWeight:'500'}}>{address.name}</p>
            <p style={{fontSize:'1.4rem',fontWeight:'500'}}>{address.email}</p>
            <p style={{fontSize:'1.3rem',fontWeight:'500'}}>{address.contactNum}</p>
            <p style={{fontSize:'1.2rem',fontWeight:'500'}}>{address.city}||{address.streetAddress}||{address.postalCode}</p>
            <p></p>
            </div>
        </div>
    )
}

export default SingleOrderShippingAddress;
