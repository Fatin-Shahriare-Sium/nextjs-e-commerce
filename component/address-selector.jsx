import React from 'react'

const AddressSelector = ({ name, email, country, city, streetAddress, code, radio, index, handle }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '300px', minHeight: '130px', border: "2px solid green", margin: '3%' }} className='address-palate'>
            <div style={{ width: '20%' }} className="address-radio ms-1">
                <input onClick={() => handle(index)} class="form-check-input" checked={radio[index]} type="radio" />
            </div>
            <div style={{ fontWeight: '500', width: '80%' }}>
                <p>{name}</p>
                <p>{email}</p>
                <p>{country}</p>
                <p>{city}|| {streetAddress} || ZIP CODE:{code}</p>
            </div>
        </div>
    )
}

export default AddressSelector;
