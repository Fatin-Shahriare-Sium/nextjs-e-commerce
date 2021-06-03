import React from 'react'
import useUrl from '../../component/hooks/useUrl';
import ImgPreviewer from '../../component/imgPriviewer';
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
    return (
        <div className='single-product'>
            <div className='single-product__header'>
                <div className='single-product__header-imgPreviewer'>
                    <ImgPreviewer img={product.img}/>
                </div>
                <div className='single-product__header-details'>

                </div>
            </div>
            <div className='single-product__body'>

            </div>
        </div>
    )
}

export default SingleProduct;
