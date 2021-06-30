import React from 'react'
import Product_Action from '../../store/action/productAction'

import useUrl from './useUrl'

const UseUpdate = () => {

    let { url } = useUrl()

    function updateCartedProductToServer(userId) {
        fetch(`${url}/user/update/cartedProduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cartedProduct: JSON.parse(localStorage.getItem('cartedx')),
                userId
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    function updateCartedProductToClient(userId) {
        fetch(`${url}/user/cartedProduct/${userId}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('cartedx', JSON.stringify(data.cartedProduct))

            })
    }
    return { updateCartedProductToClient, updateCartedProductToServer }
}

export default UseUpdate;
