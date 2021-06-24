import React, { useState } from 'react'
import { useEffect } from 'react'
import { useData } from '../store'

const OrderSummery = () => {
    let [total, setTotal] = useState()
    let { productState } = useData()

    useEffect(() => {
        let preTotal = 0
        productState.carted.forEach(sig => {
            preTotal += realPrice(sig.price, sig.priceOff, sig.qty)
        })
        setTotal(preTotal)
        localStorage.setItem('totalAmount', preTotal + 10)
    }, [JSON.stringify(productState.carted)])
    function realPrice(price, priceOff, qty) {
        let percentage = price * priceOff / 100
        let preReal = price - percentage

        return preReal * qty

    }
    return (
        <div className='shadow-lg' style={{ padding: '7px', minHeight: '37vh' }}>
            <p style={{ fontSize: "2rem", fontWeight: '700', textDecoration: 'underline' }}>Order Summery</p>
            {
                productState.carted.map((sig, index) => {
                    return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', margin: '1% auto', fontSize: '1.1rem', fontWeight: '500' }} className='product-summery'>
                        <p>{`${sig.title.substr(0, 33)} x ${sig.qty}`}</p>
                        <p>{`$${realPrice(sig.price, sig.priceOff, sig.qty)}`}</p>
                    </div>
                })
            }
            <div className='cart-calculation'>
                <p className='cart-subtotal'>{`Subtotal : $${total}`}</p>
                <p>{`Shipping fee :$${10}`}</p>
                <p>{`Total :$${total + 10}`}</p>
            </div>
        </div>
    )
}

export default OrderSummery
