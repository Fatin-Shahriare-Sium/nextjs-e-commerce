import React from 'react'
import { useData } from '../store';
import Cart from './cart';
const CartedProductShower = () => {
    let { productState } = useData()
    return (
        <div className='carted-product-shower' >
            <p style={{ fontSize: '1.7rem', fontWeight: '700', textDecoration: 'underline' }}>Your Products</p>
            {productState.carted.map((sig, index) => <Cart key={index} img={sig.img[0]} title={sig.title} qty={sig.qty} id={sig._id} price={sig.price} priceOff={sig.priceOff} />)}
        </div>
    )
}

export default CartedProductShower;
