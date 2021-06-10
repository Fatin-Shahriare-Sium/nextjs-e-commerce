import React, { useEffect, useState } from 'react'
import Carosulex from './carosulex'
import {useRouter} from 'next/router'
import Category from './category'
import { useData } from '../store'
import Navbar_Action from '../store/action/navbarAction'
const Navbar3 = () => {
    let router=useRouter()
    let[caro,setCaro]=useState(true)
    let {carosuleState,dispatch}=useData()
   
    useEffect(()=>{
        let caroRight=document.getElementById('carosule-right')
 
        if(router.pathname!=='/'){
            setCaro(false)
            caroRight.style.display='none'
        }else{
            caroRight.style.display='block'
            setCaro(true)
        }
        if(router.pathname!=='/' && carosuleState.category){
            dispatch({type:Navbar_Action.TOOGLE_CATEGORY})
        }
    },[router.pathname])
//carosuleState.category

let Hide={
    display:'none '
}
let bringTop={
    marginTop:"9%",
    position:'absolute',
    top:'-25px',
    marginLeft:"1.5%"
}
    return (
        <div style={router.pathname!=='/'?bringTop:{marginTop:"9%"}} className="carosule-container">
        <div style={!carosuleState.category?Hide:{}} id='carosule-left' className="carosule-left">
           <Category/>
        </div>
           <div id='carosule-right' className="carosule-right">
           {caro?<Carosulex/>:''}
           </div>
    </div>
    )
}

export default Navbar3
