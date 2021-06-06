
import React from 'react'

const Small = ({text}) => {
    return (
        <div style={{display:'block',fontSize:'1.3rem'}} className="invalid-feedback">
        <p>{text}</p>
        </div>    
    )
}

export default Small;
