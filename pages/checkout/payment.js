import React, { useState } from 'react'

const Payment = () => {
    let [radio, setRadio] = useState(new Array(3).fill(false))
    function handleRadio(index) {
        let radioState = new Array(3).fill(false)
        radioState[index] = !radioState[index]
        setRadio([...radioState])
    }
    return (
        <div>
            <p style={{ fontSize: '2rem', fontWeight: '500', marginTop: '1%', marginLeft: '1%' }}>Select Payment Methods</p>

            <div className='shadow-lg' style={{ fontSize: '2rem', marginTop: '1%', marginLeft: '1%', width: '500px', padding: '17px' }}>
                <div class="form-check">
                    <input class="form-check-input" type="radio" onClick={() => handleRadio(0)} checked={radio[0]} />
                    <label class="form-check-label" >
                        Pay With Cards
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" onClick={() => handleRadio(1)} checked={radio[1]} />
                    <label class="form-check-label" >
                        Bkash
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" onClick={() => handleRadio(2)} checked={radio[2]} />
                    <label class="form-check-label" >
                        Nagad
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Payment
