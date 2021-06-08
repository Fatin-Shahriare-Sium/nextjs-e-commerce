import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useUrl from '../../component/hooks/useUrl';
import ImgPreviewer from '../../component/imgPriviewer';
import cartBtn from '../../assets/cart-btn.svg'
import { useDispatch, useSelector } from 'react-redux'
import { FacebookIcon,FacebookMessengerIcon,LinkedinIcon,TelegramIcon,TwitterIcon } from "react-share";
import Product_Action from '../../redux/action/productAction';
import { loadProducts } from '../../redux/reducer/productReducer';






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
    let[btnValue,setBtnValue]=useState('des')
    let[qtyx,setQtyx]=useState(1)
    let productArray=useSelector(state=>state.data.products)
    let dispatch=useDispatch()
    useEffect(()=>{
        if(productArray.length<=0){
            
            dispatch(loadProducts())
        }
    })
    let handleBtn=useCallback(()=>{
        setBtnValue('review')
    },[btnValue])
    function realPrice(price,priceoff){
        let off=price * priceoff/100
        return price-off
    }
    return (
        <div className='single-product'>
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
                            <div onClick={()=>dispatch({type:Product_Action.ADD_CART,payload:{id:product._id,qty:qtyx}})}  className='single-product-btn--cart'>
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
