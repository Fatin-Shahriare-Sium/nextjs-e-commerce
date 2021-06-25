import React from 'react'
import moment from 'moment'

const SingleOrderSummery = ({ order }) => {
    function showPaymentDetails(type, order) {
        if (type == 'bkash') {
            return `Bkash TnxId-${order.bkashTnxId}`
        } else if (type == 'nagad') {
            return `Nagad TnxId-${order.nagadTnxId}`
        }
    }
    return (
        <div style={{ width: '90%', margin: '1% auto' }} className='single-order-summery shadow-lg p-3 '>
            <div style={{ borderBottom: '2px solid #000000' }} className="order-summery__header">
                <p style={{ fontSize: '2rem', fontWeight: '700' }}>Order Summery</p>
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: '500' }} className="order-summey__details container mt-3">
                <div className="row">
                    <div className="order-summey__details1 col-md-5">
                        <p>Order Date - {moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        <p>Order Id - {order._id}</p>
                        <p>PaymentMethod - {order.paymentMethod}</p>
                        <p>{showPaymentDetails(order.paymentMethod, order)}</p>
                        <p>PaymentStatus - {order.paymentStatus}</p>


                    </div>
                    <div className="order-summey__details2 col-md-5 offset-md-1">
                        <p>{`Total Amount-$${order.totalAmount}`}</p>
                        <p>OrderStatus-{order.orderStatus}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleOrderSummery
