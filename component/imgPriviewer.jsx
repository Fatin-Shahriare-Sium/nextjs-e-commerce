import React, { useState } from 'react'
import Image from 'next/image'
const ImgPreviewer = ({img}) => {
    let[imgContainer,setImgContainer]=useState(img)
    let[preview,setPreview]=useState(img[0])
    
    let handlePreview=(id)=>{
        let forPreview=imgContainer.find(sig=>sig.id==id)
        setPreview(()=>forPreview)
    }
    return (
        <div className='single-product__img-container'>
            <div className="single-product__img">
                <Image width='400' height='300' alt={preview.alt} src={preview.src}/>
            </div>
            <div className="single-product__img-slider">
                {
                    img.map((sig,index)=><div key={index} onClick={()=>handlePreview(sig.id)} className="min-img">
                    <Image  width='77' height='57' src={sig.src} alt={sig.alt}/>
                    </div>)
                }
            </div>
        </div>
    )
}

export default ImgPreviewer;
