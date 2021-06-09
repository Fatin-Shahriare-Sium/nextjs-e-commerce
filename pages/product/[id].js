import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useUrl from '../../component/hooks/useUrl';
import ImgPreviewer from '../../component/imgPriviewer';
import cartBtn from '../../assets/cart-btn.svg'
import { FacebookIcon,FacebookMessengerIcon,LinkedinIcon,TelegramIcon,TwitterIcon } from "react-share";
import { useData } from '../../store';
import Product_Action from '../../store/action/productAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar_Action from '../../store/action/navbarAction';
import Dollar from '../../component/dollar';






export async function getServerSideProps({params}){
    let {url}=useUrl()
    let res=await fetch(`${url}/product/${params.id}`)
    let data=await res.json()

    return{
        props:{
            product:data.singleProduct
        }
    }
}
const SingleProduct = ({product}) => {
    let {dispatch,productState,error}=useData()
    let {url}=useUrl()
    let[btnValue,setBtnValue]=useState('des')
    useEffect(async ()=>{
        if(productState.products.length<=0){
            let res=await fetch(`${url}/product/all`)
            let data=await res.json()
            dispatch({type:Product_Action.SAVE_PRODUCT,payload:{allProducts:data.allProduct}})
        }
    },[])
    let[qtyx,setQtyx]=useState(1)
    if(error.msg){
        toast.warning(error.msg,{
            className:'custom-toast'
        })
        setTimeout(()=>{
            dispatch({type:Navbar_Action.REMOVE_ERROR})
        },1500)
    }
    let handleBtn=useCallback(()=>{
        setBtnValue('review')
    },[btnValue])
    function realPrice(price,priceoff){
        let off=price * priceoff/100
        return price-off
    }
    return (
        <div className='single-product'>
            <ToastContainer autoClose={1300}/>
            <div className='single-product__header'>
                <div className='single-product__header-imgPreviewer'>
                    <ImgPreviewer img={product.img}/>
                </div>
                <div className='single-product__header-details'>
                        <div className='single-product--title'>
                            <p>{product.title}</p>
                            {console.log('render again')}
                        </div>
                        <p data-real={product.priceOff?realPrice(product.price,product.priceOff):''} style={product.priceOff?{marginTop:'3%',textDecoration:'line-through',color:'rgba(0,0,0,.5)'}:''} className='single-product--price'>
                            {product.price}
                           
                        </p>
                        <p className='single-product--brand'>
                            {`Brand: ${product.brand}`}
                        </p>
                        <div className='single-product--qty'>
                            <select onChange={(event)=>setQtyx(event.target.value)}>
                                <option value={1}>Qty 1</option>
                                <option value={2}>Qty 2</option>
                                <option value={3}>Qty 3</option>
                            </select>
                        </div>
                        <div className='single-product-btn'>
                            <div onClick={()=>dispatch({type:Product_Action.ADD_CART,payload:{id:product._id,qty:qtyx}})} className='single-product-btn--cart'>
                                <img src={cartBtn}/>
                                <p>Add to Cart</p>
                            </div>
                            <div className='single-product-btn--buy'>
                                <p>Buy Now</p>
                            </div>
                        </div>
                        <div className='single-product-social'>
                           <a href='/'> <FacebookIcon size={37} round={true}/> </a>
                            <a> <TwitterIcon size={37} round={true} /> </a>
                            <a> <FacebookMessengerIcon size={37} round={true} /></a>
                            <a><TelegramIcon size={37} round={true} /></a>
                            <a><LinkedinIcon  size={37} round={true}/></a>
                        </div>
                       
                </div>
            </div>
            <div className='single-product__body'>
                    <div className='single-product__body--header'>
                        <button onClick={()=>setBtnValue('des')} className={btnValue=='des'?'btn btn-dark':'btn btn-outline-dark'}>Description</button>
                        <button onClick={()=>setBtnValue('review')} className={btnValue=='review'?'btn btn-dark':'btn btn-outline-dark'}>Reviews</button>
                    </div>
            </div>
        </div>
    )
}

export default SingleProduct;
