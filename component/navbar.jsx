import search from '../assets/search.svg'
import cartlogo from '../assets/cart.svg'
import user from '../assets/user.svg'
import Navbar2 from './navbar2'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Navbar3 from './navbar3'
import {useRouter} from 'next/router'
import Login from './login'
import CartedOffcanvas from './carted-offcanvas'
import { useData } from '../store'


const Navbar = () => {
    let router=useRouter()
    let {productState}=useData()
    let [category,setCategory]=useState(router.pathname!=='/'?false:true)
    let [login,setLogin]=useState(false)
    let [cart,setCart]=useState(productState.controller.cartShow)
    console.log('productState.controller.cartShow',productState.controller.cartShow);
    useEffect(()=>{
        console.log(productState.controller.cartShow);
        setCart(productState.controller.cartShow)
    },[productState.controller.cartShow])
   
    function toggleCategory (){
        console.log('Allah is Almighty');
        setCategory(pre=>!pre)
    }
    function toggleLogin (){
        console.log('Allah is Almighty');
        setLogin(pre=>!pre)
    }
    function toggleCartedOffcanvas(){
        setCart(pre=>!pre)
    }
    let renderLoginForm=useMemo(()=>{
        return login && <Login handle={toggleLogin}/>
    },[login])

    let showLoginForm=useCallback(()=>{
        setLogin(pre=>!pre)
    },[login])
    useEffect(()=>{
        let leftCarosule=document.getElementById('carosule-left')
        leftCarosule.style.display=category?'block':'none'
    },[category])

    useEffect(()=>{
        window.addEventListener('scroll',(e)=>{
            let navbar=document.getElementById('navbar')
            let navbar2=document.getElementById('navbar2')
            // if(window.scrollY>=80){
            //     navbar.style.position='fixed'
            //     navbar2.style.position='fixed'
            // }
        })
    },[])
    return (
        <div className='navbar-container'>
            <div style={{zIndex:'70'}} className='fixed'>
            <div id='navbar' className='navbar'>
            <div className="navbar-brand">
                <p style={{fontSize:'2.7rem',fontWeight:'700'}}>Shawon Mill</p>
            </div>
            <div className="navbar-search">
                <input type="text" placeholder='search' />
                <div className='navbar-search--icon'>
                <img src={search} alt="" />
                </div>
            </div>
            <div className="navbar-icon">
                <div className="navbar-icon--cart">
                    <img onClick={toggleCartedOffcanvas} src={cartlogo} alt="" />
                </div>
                <div className="navbar-icon--user">
                    <img onClick={toggleLogin} src={user} alt="" />
                    {renderLoginForm}
                </div>
            </div>
        </div>
        <Navbar2 handleCategory={toggleCategory}/>
            </div>
        
        {cart && <CartedOffcanvas show={cart} carted={productState.carted} offcanvasHandler={toggleCartedOffcanvas}/>}
        <Navbar3/>
        
        </div>
    )
}

export default Navbar;
