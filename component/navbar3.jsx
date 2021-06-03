import React, { useEffect, useState } from 'react'
import Carosulex from './carosulex'
import CategorySingle from './category.single'
import {useRouter} from 'next/router'
const Navbar3 = () => {
    let router=useRouter()
    let[caro,setCaro]=useState(true)
    
    useEffect(()=>{
        let caroLeft=document.getElementById('carosule-left')
        console.log(router.pathname)
        if(router.pathname!=='/'){
            setCaro(false)
            caroLeft.style.display='none'
        }else{
            caroLeft.style.display='block'
            setCaro(true)
        }
    },[router.pathname])

    return (
        <div className="carosule-container">
        <div id='carosule-left' className="carosule-left">
            <div className="category-container">
            <CategorySingle name='Smart Phone'/>
            <CategorySingle name='Desktop'/>
            <CategorySingle name='Watch'/>
            <CategorySingle name='Smart Ac'/>
            <CategorySingle name='Motor Bike'/>
            <CategorySingle name='Smart tv & Android Tv'/>
            <CategorySingle name='Laptop'/>
            </div>
        </div>
           <div className="carosule-right">
           {caro?<Carosulex/>:''}
           </div>
    </div>
    )
}

export default Navbar3
