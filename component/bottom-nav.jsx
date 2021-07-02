import React from 'react'
import cart from '../assets/cart.svg'
import userIcon from '../assets/user.svg'
import Link from 'next/link.js'
import { useData } from '../store'
import Navbar_Action from '../store/action/navbarAction'

const BottomNav = () => {
    let { dispatch, auth } = useData()
    function toggleCartedOffcanvas() {
        dispatch({ type: Navbar_Action.TOGGLE_CART })
    }

    return (
        <div className='bottom-nav'>
            <div className="bottom-nav-link">
                <div className="bottom-nav-item">

                    <img style={{ cursor: 'pointer' }} onClick={toggleCartedOffcanvas} src={cart} alt="" />

                    <p>Cart</p>

                </div>
                <div className="bottom-nav-item__top">
                    <Link href='/'>
                        <p style={{ fontSize: '4rem', fontWeight: "700", cursor: "pointer" }}>S</p>
                    </Link>
                </div>
                <div className="bottom-nav-item">
                    {auth.user ? <Link href='/user/info'>
                        <img style={{ width: '30px', height: '30px', objectFit: "contain", border: '2px solid #000000', borderRadius: '50%', cursor: "pointer" }} src={auth.user.profilePic ? auth.user.profilePic : userIcon} />
                    </Link> :
                        <Link href='/loin'>
                            <img style={{ cursor: 'pointer' }} src={userIcon} />
                        </Link>
                    }
                    <p>Account</p>

                </div>
            </div>
        </div>
    )
}

export default BottomNav;
