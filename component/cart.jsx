import React, { useState } from 'react'
import Image from 'next/image.js'
import dustbin from '../assets/dustbin.svg'
import Product_Action from '../store/action/productAction'
import { useData } from '../store'
const Cart = ({img,title,qty,id,price,priceOff}) => {
    let {dispatch}=useData()
    function realPrice(price,priceOff){
        let percentage=price * priceOff/100
        return price-percentage
    }
    return (
        <div className='cart'>
            <div className="cart-img">
                <Image objectFit='contain' src={img.src} height='103' width='103'/>
            </div>
            <div className="cart-body">
                <div className="cart-detail">
                    <p style={{fontSize:'1.5rem',fontWeight:'700',color:'var(--text-color)'}}>{title}</p>
                    <p style={{fontSize:'1.3rem',fontWeight:'500',color:'var(--text-color)'}}>{`$ ${realPrice(price,priceOff)} x ${qty}`}</p>
                    <div className="cart-input">
                        <p onClick={()=>dispatch({type:Product_Action.INCREASE_CART,payload:{id:id}})} className='cart-input__controller'>+</p>
                        <p className='cart-input__qty'>{qty}</p>
                        <p onClick={()=>dispatch({type:Product_Action.DECREASE_CART,payload:{id:id}})}  className='cart-input__controller'>-</p>
                    </div>
                </div>
                <div className="cart-dustbin">
                        <img onClick={()=>dispatch({type:Product_Action.REMOVE_CART,payload:{id:id}})} src={dustbin} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Cart;
