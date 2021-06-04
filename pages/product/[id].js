import React from 'react'
import useUrl from '../../component/hooks/useUrl';
import ImgPreviewer from '../../component/imgPriviewer';
import cartBtn from '../../assets/cart-btn.svg'
  import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
  } from "react-share";
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
    console.log(product);
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
                        </div>
                        <p data-real={product.priceOff?realPrice(product.price,product.priceOff):''} style={product.priceOff?{marginTop:'3%',textDecoration:'line-through',color:'rgba(0,0,0,.5)'}:''} className='single-product--price'>
                            {product.price}
                        </p>
                        <p className='single-product--brand'>
                            {`Brand: ${product.brand}`}
                        </p>
                        <div className='single-product--qty'>
                            <select>
                                <option value={1}>Qty 1</option>
                                <option value={2}>Qty 2</option>
                                <option value={3}>Qty 3</option>
                            </select>
                        </div>
                        <div className='single-product-btn'>
                            <div className='single-product-btn--cart'>
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

            </div>
        </div>
    )
}

export default SingleProduct;
