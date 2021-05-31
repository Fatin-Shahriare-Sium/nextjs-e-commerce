
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'
import user from '../assets/user.svg'
import Navbar2 from './navbar2'
import Carosulex from './carosulex'

const Navbar = () => {
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
        <Navbar2/>
        <div className="carosule-container">
            <div className="carosule-left">
                <p>Allah is Almighty</p>
            </div>
            <div className="carosule-right">
            <Carosulex/>
            </div>
       
        </div>
        </div>
    )
}

export default Navbar;
