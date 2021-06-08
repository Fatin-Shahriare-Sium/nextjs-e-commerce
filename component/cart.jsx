import React, { useState } from 'react'
import Image from 'next/image.js'
import dustbin from '../assets/dustbin.svg'
import { useDispatch } from 'react-redux'
import Product_Action from '../redux/action/productAction'
const Cart = ({img,title,qty,id}) => {
    let dispatch=useDispatch()
    return (
        <div className='cart'>
            <div className="cart-img">
                <Image objectFit='contain' src={img.src} height='103' width='103'/>
            </div>
            <div className="cart-body">
                <div className="cart-detail">
                    <p style={{fontSize:'1.5rem',fontWeight:'700',color:'var(--text-color)'}}>{title}</p>
                    <p style={{fontSize:'1.3rem',fontWeight:'500',color:'var(--text-color)'}}>$100000 X 10000</p>
                    <div className="cart-input">
                        <p className='cart-input__controller' onClick={()=>dispatch({type:Product_Action.INCREASE_CART,payload:{id:id}})}>+</p>
                        <p className='cart-input__qty'>{qty}</p>
                        <p className='cart-input__controller'>-</p>
                    </div>
                </div>
                <div className="cart-dustbin">
                        <img src={dustbin} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Cart;
