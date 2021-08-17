import search from '../assets/search.svg'
import cartlogo from '../assets/cart.svg'
import usericon from '../assets/user.svg'
import Navbar2 from './navbar2'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Navbar3 from './navbar3'
import { useRouter } from 'next/router'
import Login from './login'
import Link from 'next/link'
import CartedOffcanvas from './carted-offcanvas'
import { useData } from '../store'
import Navbar_Action from '../store/action/navbarAction'
import menubar from '../assets/menu.svg'
import NavOffCanvas from './nav-offcanvas'
import useUrl from './hooks/useUrl'
import SingleSearchResult from './single-search-result'

const Navbar = () => {
    let router = useRouter()
    let { url } = useUrl()
    let { productState, dispatch, auth } = useData()
    let [category, setCategory] = useState(router.pathname !== '/' ? false : true)
    let [login, setLogin] = useState(false)
    let [slider, setSlider] = useState(false)
    let [searched, setSearched] = useState()
    let [text, setText] = useState('')
    let cart = productState.controller.cartShow

    function toggleCategory() {
        dispatch({ type: Navbar_Action.TOOGLE_CATEGORY })
    }
    function toggleSlider() {
        setSlider(pre => !pre)
    }
    function toggleLogin() {

        setLogin(pre => !pre)
    }
    function toggleCartedOffcanvas() {
        dispatch({ type: Navbar_Action.TOGGLE_CART })
    }

    function handleSearch(textx) {

        if (textx) {
            fetch(`${url}/product/search/${textx}`, {
                method: 'GET'
            }).then(res => res.json())
                .then(data => {
                    setSearched(data.searchedProducts)
                })
        }
    }
    let renderLoginForm = useMemo(() => {
        return login && <Login handle={toggleLogin} />
    }, [login])

    let showLoginForm = useCallback(() => {
        setLogin(pre => !pre)
    }, [login])

    return (
        <div id='navbar-container' className='navbar-container'>
            {slider && <NavOffCanvas show={slider} handleSlider={toggleSlider} />}
            <div style={{ zIndex: '70' }} className='fixed'>
                <div id='navbar' className='navbar'>
                    <div className="navbar-brand">
                        <p style={{ fontSize: '2.7rem', fontWeight: '700' }}>Shawon Mill</p>
                        <img onClick={toggleSlider} src={menubar} alt="" />
                    </div>
                    <div className="navbar-search">
                        <input onChange={(event) => setText(event.target.value)} value={text} type="text" placeholder='search' />
                        <div className='navbar-search--icon'>
                            <img onClick={() => handleSearch(text)} src={search} alt="" />
                        </div>
                        {
                            searched && <div className='search-result__wrapper'>
                                <p onClick={() => setSearched('')} style={{ fontSize: '1.5rem', marginLeft: 'auto', marginRight: '3%', cursor: 'pointer', fontWeight: '700', maxWidth: 'max-content' }}>x</p>
                                {searched.map(sig => <SingleSearchResult id={sig._id} title={sig.title} img={sig.img[0]} />)}
                            </div>
                        }
                    </div>
                    <div className="navbar-icon">
                        <div data-length={productState.carted.length} className="navbar-icon--cart">
                            <img onClick={toggleCartedOffcanvas} src={cartlogo} alt="" />
                        </div>
                        {
                            auth.user ? <Link href='/user/info'>
                                <div className="navbar-icon--user">

                                    {typeof window !== 'undefined' && <img src={auth.user.profilePic ? auth.user.profilePic : usericon} alt="" />}

                                </div>
                            </Link> : <div className="navbar-icon--user">
                                <img onClick={toggleLogin} src={usericon} alt="" />
                                {login && <div className='loginfrom-navbar'>
                                    {renderLoginForm}
                                </div>}
                            </div>
                        }
                    </div>
                </div>
                <Navbar2 handleCategory={toggleCategory} />
            </div>

            {cart && <CartedOffcanvas show={cart} carted={productState.carted} offcanvasHandler={toggleCartedOffcanvas} />}
            {/* <Navbar3/> */}

        </div>
    )
}

export default Navbar;
