
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'
import user from '../assets/user.svg'

const Navbar = () => {
    return (
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
    )
}

export default Navbar;
