
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'
import user from '../assets/user.svg'
import Navbar2 from './navbar2'

import { useEffect, useState } from 'react'
import Navbar3 from './navbar3'

const Navbar = () => {
    let [category,setCategory]=useState(true)

    function toggleCategory (){
        console.log('Allah is Almighty');
        setCategory(pre=>!pre)
    }
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
                    <img src={user} alt="" />
                </div>
            </div>
        </div>
        <Navbar2 handleCategory={toggleCategory}/>
        <Navbar3/>
        </div>
    )
}

export default Navbar;
