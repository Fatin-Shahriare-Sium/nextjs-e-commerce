import React from 'react'
import Link from 'next/link.js'
const SingleSearchResult = ({ img, title, id }) => {
    return (
        <Link href={`/product/${id}`}>
            <div style={{ display: 'flex', alignItems: 'center', margin: "2% 0%", textDecoration: 'underline', textDecorationColor: 'blue', cursor: 'pointer' }}>
                <img style={{ width: '30px', height: '30px', objectFit: 'conatain', marginLeft: '3%' }} src={img.src} alt="" />
                <div style={{ marginLeft: '3%' }}>
                    <p style={{ fontSize: '1.7rem', fontWeight: '500', margin: '0px' }}>{title}</p>
                </div>
            </div>
        </Link>
    )
}

export default SingleSearchResult;
