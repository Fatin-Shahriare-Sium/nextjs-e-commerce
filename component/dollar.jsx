import React from 'react'

const Dollar = ({value,classx}) => {
    return (
        <p className={`dollar ${classx}`}>{value}</p>
    )
}

export default Dollar;
