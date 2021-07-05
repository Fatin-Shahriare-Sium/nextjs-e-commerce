import arrow from '../assets/arrow.svg'
import Link from 'next/link'
const Navbar2 = ({ handleCategory }) => {
    return (
        <div id='navbar2' className='navbar2'>
            <div onClick={() => handleCategory()} className="navbar2-category">
                <p>Category</p>
                <img src={arrow} alt="" />
            </div>
            <Link href="/search">
                <div className='navbar2-all'>
                    <p>All products</p>
                </div>
            </Link>
            <div className="navbar2-help">
                <p>Help</p>
            </div>

            <div className="navbar2-contact">
                <p>Contact</p>
            </div>

            <Link href='/credit'>
                <div className="navbar2-contact">
                    <p>Credit</p>
                </div>
            </Link>
        </div>
    )
}

export default Navbar2;
