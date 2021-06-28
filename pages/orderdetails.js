import React, { useEffect, useState } from 'react'
import useUrl from '../component/hooks/useUrl';
import SingleOrderSidebar from '../component/single-order-sidebar';
import { useData } from '../store';
import SingleOrderSummery from '../component/single-order-summery';
import SingleOrderProduct from '../component/single-order-product';
import SingleOrderTimeline from '../component/single-order-timeline';
import SingleOrderShippingAddress from '../component/single-order-shippingAddress.jsx';
const OrderDetails = () => {
    let { auth } = useData()
    let { url } = useUrl()
    let [orders, setOrders] = useState([])
    let [selectedOrder, setSelectedOrder] = useState()
    let [selectedId, setSelectedId] = useState('')
    useEffect(() => {
        fetch(`${url}/order/all/${auth.user._id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data.allOrderOfUser)
            })

    }, [])

    let handleSelectedId = (id) => {
        setSelectedId(id)
        setSelectedOrder(orders.find(sig => sig._id == id))
        console.log(selectedId);
    }
    return (
        <div className='order-details__container container-fluid mt-3'>
            <div className='row'>
                <div style={{ overflowY: 'auto', borderRight: '2px solid red', height: '83vh' }} className='order-details__sidebar col-md-3'>
                    {orders.map(sig => <SingleOrderSidebar id={sig._id} date={sig.createdAt} totalAmount={sig.totalAmount} selectedId={selectedId} handleSelector={handleSelectedId} paymentStatus={sig.paymentStatus} orderStatus={sig.orderStatus} />)}
                </div>
                <div style={{ overflowY: 'auto', height: '83vh' }} className='order-details__shower col-md-9'>
                 {selectedOrder && <SingleOrderShippingAddress address={selectedOrder.address} />}
                    {selectedOrder && < SingleOrderSummery order={selectedOrder} />}
                    {selectedOrder && <SingleOrderProduct orderedProduct={selectedOrder.product} paymentStatus={selectedOrder.paymentStatus} totalAmount={selectedOrder.totalAmount} />}

                   {selectedOrder &&  <SingleOrderTimeline orderTimeline={selectedOrder.orderTimeline} />}
                    <div style={{ height: '10vh' }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;
