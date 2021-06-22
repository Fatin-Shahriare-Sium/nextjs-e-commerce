import React from 'react'

const AddressSelector = ({ name, email, country, city, streetAddress, code, radio, index, handle }) => {
    return (
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', width: '19%', border: "2px solid green", padding: "7px" }} className='address-palate'>
            <div className="address-radio">
                <input onClick={() => handle(index)} class="form-check-input" checked={radio[index]} type="radio" />
            </div>
            <div style={{ fontWeight: '500' }}>
                <p>{name}</p>
                <p>{email}</p>
                <p>{country}</p>
                <p>{city}|| {streetAddress} || ZIP CODE:{code}</p>
            </div>
        </div>
    )
}

export default AddressSelector;
