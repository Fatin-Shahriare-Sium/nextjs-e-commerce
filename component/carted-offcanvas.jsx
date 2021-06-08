import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import Cart from './cart'

const CartedOffcanvas = ({show,offcanvasHandler,carted}) => {

    // let carted=useSelector(state=>state.data.carted)
    useEffect(()=>{
        console.log('CartedOffcanvas');
    },[carted])
   
    return (
        <div className='offcanvas-wrapper'>
               <div class={show?'offcanvas offcanvas-end show':'offcanvas offcanvas-end'}>
            <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">My Cart</h5>
             <button type="button" onClick={offcanvasHandler} class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            {carted.map((sig,index)=><Cart key={index} id={sig._id} img={sig.img[0]} qty={sig.qty} title={sig.title}/>)}
             </div>
        </div>
        </div>
    )
}

export default CartedOffcanvas;
