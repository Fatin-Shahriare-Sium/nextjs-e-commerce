import React from 'react'
import errImg from '../assets/err.svg'
const Errorx = () => {
    return (
        <div className='container-fluid'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='row'>
                <div className='col-md-5'>
                    <img style={{ width: '100%' }} src={errImg} />
                </div>
                <div className='col-md-5 offset-md-1'>
                    <p style={{ fontSize: '2.3rem', fontWeight: '700', textAlign: 'center' }}>Sorry,we are working to fix this page</p>
                </div>
            </div>
        </div>
    )
}

export default Errorx;
