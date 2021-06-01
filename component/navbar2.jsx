import arrow from '../assets/arrow.svg'

const Navbar2 = ({handleCategory}) => {
    return (
        <div className='navbar2'>
            <div onClick={()=>handleCategory()} className="navbar2-category">
                <p>Category</p>
                <img src={arrow} alt="" />
            </div>
            <div className='navbar2-all'>
                <p>All products</p>
            </div>
            <div className="navbar2-help">
                <p>Help</p>
            </div>
            <div className="navbar2-contact">
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Navbar2;
