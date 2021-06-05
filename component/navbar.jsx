import search from '../assets/search.svg'
import cart from '../assets/cart.svg'
import user from '../assets/user.svg'
import Navbar2 from './navbar2'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Navbar3 from './navbar3'
import {useRouter} from 'next/router'
import Login from './login'

const Navbar = () => {
    let router=useRouter()
    let [category,setCategory]=useState(router.pathname!=='/'?false:true)
    let [login,setLogin]=useState(false)
    function toggleCategory (){
        console.log('Allah is Almighty');
        setCategory(pre=>!pre)
    }
    let renderLoginForm=useMemo(()=>{
        return login && <Login/>
    },[login])

    let showLoginForm=useCallback(()=>{
        setLogin(pre=>!pre)
    },[login])
    useEffect(()=>{
        let leftCarosule=document.getElementById('carosule-left')
        leftCarosule.style.display=category?'block':'none'
    },[category])
    return (
        <div className='navbar-container'>
        <div className='navbar'>
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
                    <img src={cart} alt="" />
                </div>
                <div className="navbar-icon--user">
                    <img onClick={()=>showLoginForm()} src={user} alt="" />
                    {renderLoginForm}
                </div>
            </div>
        </div>
        
        <Navbar2 handleCategory={toggleCategory}/>
        <Navbar3/>
        
        </div>
    )
}

export default Navbar;
