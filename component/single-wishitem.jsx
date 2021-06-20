import React from 'react'
import Link from 'next/link.js'
const SingleWishItem = ({ title, id, img, handleRemover }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: '1% auto' }} className='single-wishitem shadow-lg'>
            <div style={{ width: "25%" }} className="wishitem-img">
                <img style={{ width: '50px', height: "60px", marginLeft: '3%' }} src={img} alt="" />
            </div>
            <div style={{ width: "50%" }} className="wishitem-title">
                <Link href={`/product/${id}`}>{title}</Link>
            </div>
            <div style={{ width: "25%" }} className="wishitem-btn">
                <button onClick={() => handleRemover(id)} className='btn btn-outline-danger'>Remove</button>
            </div>
        </div>
    )
}

export default SingleWishItem;
