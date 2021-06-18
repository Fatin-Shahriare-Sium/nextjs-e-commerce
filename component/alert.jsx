
import React from 'react'

const Alert = ({text,color}) => {
    return (
        <div  id='alert' class={`alert alert-${color}`} role="alert">
                <p style={{fontSize:'1.3rem',fontWeight:'500',margin:"0px"}}>{text}</p>
        </div>
    )
}

export default Alert
