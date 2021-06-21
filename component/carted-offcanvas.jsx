import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import Cart from './cart'
import Dollar from './dollar'
import StripeCheckout from 'react-stripe-checkout';
import useUrl from './hooks/useUrl';
const CartedOffcanvas = ({ show, offcanvasHandler, carted }) => {
    let [total, setTotal] = useState()
    let { url } = useUrl()
    function realPrice(price, priceOff, qty) {
        let percentage = price * priceOff / 100
        let preReal = price - percentage
        return preReal * qty
    }
    useEffect(() => {
        let subTotal = 0
        carted.forEach(sig => subTotal += realPrice(sig.price, sig.priceOff, sig.qty))
        setTotal(subTotal)
    }, [JSON.stringify(carted)])

    function handleToken(token) {
        console.log(token);
        fetch(`${url}/payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token,
                product: carted
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className='offcanvas-wrapper'>
            <div class={show ? 'offcanvas offcanvas-end show ' : 'offcanvas offcanvas-end'}>
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">My Cart</h5>
                    <button type="button" onClick={offcanvasHandler} class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    {carted.map((sig, index) => <Cart key={index} id={sig._id} img={sig.img[0]} qty={sig.qty} title={sig.title} priceOff={sig.priceOff} price={sig.price} />)}
                </div>
                <div className='offcanvas-footer'>
                    <div className='cart-calculation'>
                        <p className='cart-subtotal'>{`Subtotal : $${total}`}</p>
                        <p>{`Shipping fee :$${10}`}</p>
                        <p>{`Total :$${total + 10}`}</p>

                        <StripeCheckout token={handleToken}
                            panelLabel="Give Money" // prepended to the amount in the bottom pay button
                            amount={`${(total + 10) * 100}`}// cents
                            currency="USD"
                            shippingAddress={false}
                            billingAddress
                            stripeKey='pk_test_51J4rHMFpIjqeQSow0hRReErJ6IjCcDrKBAqUeZbG4gBq0EAejjbE4zoIU8IkZg9xRsjT7vYSw2GSXmRpOcAjRNN600zR45r8tP' >
                            <button className='btn btn-outline-success shadow w-100'>Procced to Checkout</button>
                        </StripeCheckout>
                    </div>
                    <p>#allahisalmighty</p>
                </div>
            </div>

        </div>
    )
}

export default CartedOffcanvas;
