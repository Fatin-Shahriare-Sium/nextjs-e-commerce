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
    }, [JSON.stringify(productState.carted)])
    function realPrice(price, priceOff, qty) {
        let percentage = price * priceOff / 100
        let preReal = price - percentage
        return preReal * qty
    }
    return (
        <div>
            <p>Order Summery</p>
            {
                productState.carted.map((sig, index) => {
                    return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className='product-summery'>
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
