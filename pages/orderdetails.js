import React, { useEffect, useState } from 'react'
import useUrl from '../component/hooks/useUrl';
import SingleOrderSidebar from '../component/single-order-sidebar';
import { useData } from '../store';
const OrderDetails = () => {
    let { auth } = useData()
    let { url } = useUrl()
    let [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`${url}/order/all/${auth.user._id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => {
                setOrders(data.allOrderOfUser)
            })

    }, [])
    return (
        <div className='order-details__container container-fluid'>
            <div className='row'>
                <div className='order-details__sidebar col-md-3'>
                    {orders.map(sig => <SingleOrderSidebar id={sig._id} paymentStatus={sig.paymentStatus} orderStatus={sig.orderStatus} />)}
                </div>
                <div className='order-details__shower col-md-9'>

                </div>
            </div>
        </div>
    )
}

export default OrderDetails;
