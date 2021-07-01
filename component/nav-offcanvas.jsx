import React from 'react'
import { useData } from '../store'
import Category from './category'
import help from '../assets/help.svg'
import Cdoor from '../assets/c-door.svg'
import targetIcon from '../assets/target.svg'
import locationx from '../assets/location.svg'
import Link from 'next/link.js'
import UseLogout from './hooks/useLogout'

const NavOffCanvas = ({ show, handleSlider }) => {
    let { auth } = useData()

    let { handleLogout } = UseLogout()
    return (
        <div className='offcanvas-wrapper'>
            <div class={show ? 'offcanvas offcanvas-start show ' : 'offcanvas offcanvas-start'}>
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">My Account</h5>
                    <button type="button" class="btn-close text-reset" onClick={handleSlider} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    {auth.user ? <div className="account p-3" style={{ display: 'flex', alignItems: 'center', boxShadow: "rgb(0 0 0 / 10%) 1px 0px 20px 6px", minHeight: "13vh", borderRadius: '13px' }}>
                        <img style={{ width: '40px', height: '40px', objectFit: "contain", border: '2px solid #000000', borderRadius: '50%' }} src={auth.user.profilePic} alt="" />
                        <div className="account-info ms-3">
                            <p style={{ fontSize: '2rem', fontWeight: '700', margin: '0px' }}>{auth.user.name}</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: '500', margin: '0px' }}>{auth.user.email}</p>

                            <p style={{ fontSize: '1.5rem', fontWeight: '500' }}>
                                <Link href='/user/info'>
                                    My Account
                                </Link>
                            </p>
                        </div>
                    </div> : <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', boxShadow: "rgb(0 0 0 / 10%) 1px 0px 20px 6px", minHeight: "13vh", borderRadius: '13px' }} className=''>
                        <Link href='/login'>
                            <button onClick={handleSlider} style={{ fontSize: '2rem', fontWeight: '500' }} className='btn btn-outline-success w-100 '>Login</button>
                        </Link>
                        <p style={{ fontSize: '2rem', fontWeight: '500' }}>or</p>
                        <Link href='/signup'>
                            <button onClick={handleSlider} style={{ fontSize: '2rem', fontWeight: '500' }} class='btn btn-outline-dark w-100'>Signup</button>
                        </Link>
                    </div>}

                    <div className='tab-list'>
                        <Link href='/help'>
                            <div className="nav-list-item">
                                <img src={help} alt="" />
                                <p>Help</p>
                            </div>
                        </Link>
                        <Link href='/search'>
                            <div onClick={handleSlider} className="nav-list-item">
                                <img src={targetIcon} alt="" />
                                <p>AllProducts</p>
                            </div>
                        </Link>
                        {auth.user && <Link href='/orderdetails'>
                            <div onClick={handleSlider} className="nav-list-item">
                                <img src={locationx} alt="" />
                                <p>Track order</p>
                            </div>
                        </Link>}

                        {
                            auth.user && <div onClick={handleLogout} className="nav-list-item">
                                <img src={Cdoor} alt="" />
                                <p onClick={handleSlider}>Logout</p>
                            </div>
                        }

                    </div>
                    <p style={{ fontSize: '2rem', fontWeight: '700', margin: '0px' }}>Categoris</p>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='category-offcanvas'>
                        <Category />
                    </div>
                </div>
                <div className='offcanvas-footer'>

                    <p>#allahisalmighty</p>
                </div>
            </div>

        </div>
    )
}

export default NavOffCanvas;
