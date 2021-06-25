import React from 'react'
import Link from 'next/link.js'
const SingleOrderProduct = ({ orderedProduct, totalAmount, paymentStatus }) => {
    function realPrice(price, priceOff) {

        let percentage = price * (priceOff / 100)
        let preReal = price - percentage
        return preReal;
    }
    return (
        <div className='shadow-lg p-3' style={{ width: '90%', margin: '3% auto' }}>
            <p style={{ fontSize: '2rem', fontWeight: '700', borderBottom: '2px solid #000000' }} > Ordered Product</p>
            {
                orderedProduct.map((sig, index) => <Link href={`/product/${sig._id}`}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1%', cursor: "pointer", width: "50%", fontSize: '1.1rem', borderBottom: '1px solid #666060' }}>
                        <img style={{ width: '90px', height: '70px', objectFit: 'contain' }} src={sig.img[0].src} alt="" />
                        <p>{sig.title.substr(0, 30)}</p>
                        <p>{`$${realPrice(sig.price, sig.priceOff)} x ${sig.qty}`}</p>
                        <p>${realPrice(sig.price, sig.priceOff) * sig.qty}</p>
                    </div>
                </Link>)
            }
            <div className='mt-3'>
                <p style={{ fontSize: '1.7rem', fontWeight: '500' }}>Total Amount with shipping fee ${totalAmount}</p>
            </div>
            <div>
                <p style={{ fontSize: '1.3rem', fontWeight: '500', margin: '0px' }}>Payment Status - {paymentStatus}</p>
                <button style={{ width: '7%' }} disabled={paymentStatus == 'unpaid' ? false : true} className='btn btn-outline-primary mt-3'>Pay</button>
            </div>
        </div>
    )
}

export default SingleOrderProduct;
